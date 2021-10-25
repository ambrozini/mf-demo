import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@mf-demo/material';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookStoreComponent } from './book-store.component';

@NgModule({
  declarations: [BookStoreComponent],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    MaterialModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class BookStoreModule {}
