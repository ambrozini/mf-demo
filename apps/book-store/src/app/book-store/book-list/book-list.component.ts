import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadBooks } from '../state/book/book.actions';
import { Book } from '../state/book/book.model';
import { State } from '../state/book/book.reducer';
import { selectAll } from '../state/book/books.selectors';

@Component({
  selector: 'uni-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  dataset$: Observable<Book[]> = of([]);
  displayedColumns: string[] = ['id', 'title', 'author'];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
    this.dataset$ = this.store.select(selectAll);
  }
}
