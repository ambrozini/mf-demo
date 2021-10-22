import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-store',
    pathMatch: 'full',
  },
  {
    path: 'book-store',
    loadChildren: () =>
      import('./book-store/book-store.module').then((m) => m.BookStoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
