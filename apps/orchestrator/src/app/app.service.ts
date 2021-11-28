import { Injectable } from '@nestjs/common';

enum ModuleType {
  ANGULAR_MODULE,
  WEB_COMPONENT,
}

type ModuleConfiguration = (
  | {
      type: ModuleType.WEB_COMPONENT;
    }
  | {
      type: ModuleType.ANGULAR_MODULE;
      ngModuleName: string;
    }
) & {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  displayName: string;
  routePath: string;
  active: boolean;
};

@Injectable()
export class AppService {
  getData(): ModuleConfiguration[] {
    return [
      {
        type: ModuleType.ANGULAR_MODULE,
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'bookStore',
        exposedModule: './Module',
        displayName: 'Book Store',
        routePath: 'book-store',
        ngModuleName: 'BookStoreModule',
        active: true,
      },
      {
        type: ModuleType.WEB_COMPONENT,
        remoteEntry: 'http://localhost:8083/remoteEntry.js',
        remoteName: 'newFeature',
        exposedModule: './Index',
        displayName: 'New Feature',
        routePath: 'new-feature',
        active: true,
      },
    ];
  }
}
