import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../book/book.component';
import { BookListComponent } from './book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    children: [
      {
        path: 'details/:id',
        component: BookComponent,
      },
      {
        path: 'new',
        component: BookComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookListRoutingModule {}
