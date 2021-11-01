import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@mf-demo/auth';
import { ErrorComponent } from './error/error.component';
import { LazyModulesGuard } from './guard/lazy-modules.guard';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

export const FALLBACK_ROUTE: Route = {
  path: '**',
  canActivate: [LazyModulesGuard],
  component: ErrorComponent,
  pathMatch: 'full',
};

@NgModule({
  imports: [RouterModule.forRoot([...APP_ROUTES, FALLBACK_ROUTE])],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
