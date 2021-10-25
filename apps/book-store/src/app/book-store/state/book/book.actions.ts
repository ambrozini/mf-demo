import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';

export const loadBooks = createAction('[Book] Load Books');

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());

export const upsertBook = createAction(
  '[Book] Upsert Book',
  props<{ book: Book }>()
);

export const addBooks = createAction(
  '[Book] Add Books',
  props<{ books: Book[] }>()
);

export const upsertBooks = createAction(
  '[Book] Upsert Books',
  props<{ books: Book[] }>()
);

export const updateBook = createAction(
  '[Book] Update Book',
  props<{ book: Update<Book> }>()
);

export const updateBooks = createAction(
  '[Book] Update Books',
  props<{ books: Update<Book>[] }>()
);

export const deleteBook = createAction(
  '[Book] Delete Book',
  props<{ id: string }>()
);

export const deleteBooks = createAction(
  '[Book] Delete Books',
  props<{ ids: string[] }>()
);

export const clearBooks = createAction('[Book] Clear Books');
