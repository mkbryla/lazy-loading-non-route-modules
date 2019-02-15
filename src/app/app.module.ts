import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoadModuleDirective } from './lazy-load-module.directive';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadModuleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
