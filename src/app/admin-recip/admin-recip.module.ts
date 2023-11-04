import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRecipRoutingModule } from './admin-recip-routing.module';
import { AdminRecipComponent } from './admin-recip.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminRecipComponent],
  imports: [
    CommonModule,
    AdminRecipRoutingModule,
    SharedModule
  ]
})
export class AdminRecipModule { }
