import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { DynamicRoute } from '../service/dynamic-routes/dynamic-route';
import { DynamicRoutesService } from '../service/dynamic-routes/dynamic-routes.service';

@Injectable({
  providedIn: 'root',
})
export class LazyModulesGuard implements CanActivate {
  constructor(
    private router: Router,
    private dynamicRoutesService: DynamicRoutesService
  ) {}

  async canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const currentPath = state.url.split('/')[1];
    const route = (await this.dynamicRoutesService.dynamicRoutes).find(
      (route: DynamicRoute) => route.routePath === currentPath
    );
    if (route && route.active) {
      this.router.navigateByUrl(state.url);
    }
    return true;
  }
}
