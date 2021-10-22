import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@mf-demo/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  entryComponents: [LoginComponent],
})
export class AuthModule {}
