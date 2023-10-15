import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationPageComponent } from './registration-page.component';


@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    SharedModule
  ]
})
export class RegistrationPageModule { }
