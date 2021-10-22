import { Component, OnInit } from '@angular/core';
import { AuthService } from '@mf-demo/auth';

@Component({
  selector: 'mf-demo-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css'],
})
export class BookStoreComponent implements OnInit {
  username = 'Book Reader';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.username || this.username;
  }
}
