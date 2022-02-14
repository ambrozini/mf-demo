import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { APP_ROUTES, FALLBACK_ROUTE } from '../../app-routing.module';
import { DynamicComponent } from '../../dynamic/dynamic.component';
import { ModuleConfig, ModuleType } from '../orchestrator/module-config';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { DynamicRoute } from './dynamic-route';

@Injectable({
  providedIn: 'root',
})
export class DynamicRoutesService {
  private _dynamicRoutes: DynamicRoute[] | undefined;

  private routeBuilderMap = new Map<
    ModuleType,
    (moduleConfig: ModuleConfig) => Route
  >([
    [ModuleType.ANGULAR_MODULE, this.buildRouteForAngularModule.bind(this)],
    [ModuleType.WEB_COMPONENT, this.buildRouteForWebComponent.bind(this)],
  ]);

  public get dynamicRoutes(): Promise<DynamicRoute[]> {
    if (this._dynamicRoutes == null) {
      return this.init().then(async (dynamicRoutes) => {
        this._dynamicRoutes = dynamicRoutes;
        return [...this._dynamicRoutes];
      });
    }
    return Promise.resolve([...this._dynamicRoutes]);
  }

  constructor(
    private router: Router,
    private orchestratorService: OrchestratorService
  ) {}

  private async init(): Promise<DynamicRoute[]> {
    const config = await this.orchestratorService.getConfig();
    const newRoutes = this.buildRoutes(config);
    this.router.resetConfig(newRoutes);
    return config;
  }

  private buildRoutes(config: ModuleConfig[]): Routes {
    const lazyRoutes: Routes = config
      .filter((c) => c.active)
      .map((c) => {
        const builder = this.routeBuilderMap.get(c.type);
        if (!builder) {
          throw new Error('no route builder for that type');
        }
        return builder(c);
      });

    return [...APP_ROUTES, ...lazyRoutes, FALLBACK_ROUTE];
  }

  private buildRouteForAngularModule(config: ModuleConfig) {
    return {
      path: config.routePath,
      loadChildren: () =>
        loadRemoteModule(config).then((m) => m[config.ngModuleName]),
    };
  }

  private buildRouteForWebComponent(config: ModuleConfig) {
    return {
      path: config.routePath,
      component: DynamicComponent,
      data: {
        config,
      },
    };
  }
}
