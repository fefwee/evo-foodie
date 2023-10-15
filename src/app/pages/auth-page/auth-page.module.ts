import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessagesModule
  ]
})
export class AuthPageModule { }
