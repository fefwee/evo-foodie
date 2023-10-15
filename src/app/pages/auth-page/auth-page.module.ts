import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    AuthPageRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AuthPageModule { }
