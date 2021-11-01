import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { APP_ROUTES, FALLBACK_ROUTE } from '../../app-routing.module';
import { ModuleConfig, ModuleType } from '../orchestrator/module-config';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { DynamicRoute } from './dynamic-route';

@Injectable({
  providedIn: 'root',
})
export class DynamicRoutesService {
  private _dynamicRoutes: DynamicRoute[] = [];

  private routeBuilderMap = new Map<
    ModuleType,
    (moduleConfig: ModuleConfig) => Route
  >([[ModuleType.ANGULAR_MODULE, this.buildRouteForAngularModule.bind(this)]]);

  public get dynamicRoutes(): DynamicRoute[] {
    return [...this._dynamicRoutes];
  }

  constructor(
    private router: Router,
    private orchestratorService: OrchestratorService
  ) {}

  async init() {
    if (this.dynamicRoutes.length == 0) {
      const config = await this.orchestratorService.getConfig();
      this._dynamicRoutes = config as DynamicRoute[];
      const newRoutes = this.buildRoutes(config);
      this.router.resetConfig(newRoutes);
    }
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
}
