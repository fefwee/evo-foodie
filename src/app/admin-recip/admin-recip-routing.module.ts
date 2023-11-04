import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRecipComponent } from './admin-recip.component';

const routes: Routes = [
  {
    path: '',
    component: AdminRecipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRecipRoutingModule { }
