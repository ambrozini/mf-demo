import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '../router/router.selectors';
import { adapter, booksFeatureKey, State } from './book.reducer';

const getBooksFeatureState = createFeatureSelector<State>(booksFeatureKey);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors<State>(getBooksFeatureState);

export const getBookById = createSelector(
  selectEntities,
  selectRouteParams,
  (books, { id }) => books[id]
);
