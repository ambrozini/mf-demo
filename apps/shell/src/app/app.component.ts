import { Component } from '@angular/core';
import { AuthService } from '@mf-demo/auth';

@Component({
  selector: 'mf-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.username = 'Admin';
  }
}
