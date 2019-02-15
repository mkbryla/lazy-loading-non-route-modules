import {
  Directive,
  Inject,
  Injector,
  Input, NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef, OnDestroy, OnInit, Type,
  ViewContainerRef
} from '@angular/core';
import { LAZY_MODULES_MAP, LazyModules } from './constants/lazy-modules';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[lazyLoadModule]'
})
export class LazyLoadModuleDirective implements OnInit, OnDestroy {
  @Input('lazyLoadModule') moduleName: keyof LazyModules;

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap) {
  }

  public ngOnInit(): void {
    this.loader
        .load(this.modulesMap[ this.moduleName ])
        .then((moduleFactory: NgModuleFactory<any>) => {
          this.moduleRef = moduleFactory.create(this.injector);

          const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;

          const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);

          this.vcr.createComponent(factory);
        })
  }

  public ngOnDestroy(): void {
    this.moduleRef && this.moduleRef.destroy();
  }

}
