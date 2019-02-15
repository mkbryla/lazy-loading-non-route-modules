import { InjectionToken } from '@angular/core';

export type LazyModules = {
  lazyLoaded: string;
};

export const lazyModulesMap: LazyModules = {
  lazyLoaded: 'src/app/lazy-loaded/lazy-loaded.module#LazyLoadedModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyModulesMap
});
