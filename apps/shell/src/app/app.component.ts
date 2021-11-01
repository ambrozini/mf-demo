import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mf-demo/auth';
import { DynamicRoute } from './service/dynamic-routes/dynamic-route';
import { DynamicRoutesService } from './service/dynamic-routes/dynamic-routes.service';

@Component({
  selector: 'mf-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routes: DynamicRoute[] = [];

  constructor(
    private authService: AuthService,
    private dynamicRoutesService: DynamicRoutesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.username = 'Admin';
    await this.dynamicRoutesService.init();
    this.routes = this.dynamicRoutesService.dynamicRoutes;
  }
}
