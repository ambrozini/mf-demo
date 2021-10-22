import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mf-demo/auth';

@Component({
  selector: 'mf-demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username = 'Anonymous';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.username || this.username;
  }
}
