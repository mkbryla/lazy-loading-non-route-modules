import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded.component';

@NgModule({
  declarations: [LazyLoadedComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [LazyLoadedComponent]
})
export class LazyLoadedModule {
  static rootComponent = LazyLoadedComponent;
}
