import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@mf-demo/material';
import { BookComponent } from '../book/book.component';
import { BookStateModule } from '../state/book/book-state.module';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [BookListComponent, BookComponent],
  imports: [
    CommonModule,
    BookListRoutingModule,
    MaterialModule,
    BookStateModule,
  ],
})
export class BookListModule {}
