import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookEffects } from './book.effects';
import * as fromBook from './book.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookStateModule {}
