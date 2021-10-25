import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../state/book/book.model';
import { State } from '../state/book/book.reducer';
import { getBookById } from '../state/book/books.selectors';

@Component({
  selector: 'uni-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book$?: Observable<Book | undefined>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.book$ = this.store.select(getBookById);
  }
}
