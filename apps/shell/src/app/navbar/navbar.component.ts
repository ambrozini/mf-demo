import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DynamicRoute } from '../service/dynamic-routes/dynamic-route';

@Component({
  selector: 'mf-demo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input()
  routes: DynamicRoute[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
