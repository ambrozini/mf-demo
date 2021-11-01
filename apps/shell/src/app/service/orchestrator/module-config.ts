import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export enum ModuleType {
  ANGULAR_MODULE,
  WEB_COMPONENT,
}

export type ModuleConfig = LoadRemoteModuleOptions & {
  type: ModuleType;
  displayName: string;
  routePath: string;
  ngModuleName: string;
  active: boolean;
};
