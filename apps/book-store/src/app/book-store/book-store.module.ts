import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@mf-demo/material';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookStoreComponent } from './book-store.component';

@NgModule({
  declarations: [BookStoreComponent],
  imports: [CommonModule, BookStoreRoutingModule, MaterialModule],
})
export class BookStoreModule {}
