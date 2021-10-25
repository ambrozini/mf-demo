import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromBook from './book.actions';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions) {}

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromBook.loadBooks),
      map(() =>
        fromBook.loadBooksSuccess({
          books: [{ id: '1', title: 'Book 1', author: 'John Paul' }],
        })
      )
    );
  });
}
