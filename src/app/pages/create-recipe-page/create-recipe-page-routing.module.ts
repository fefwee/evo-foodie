import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipePageComponent } from './create-recipe-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRecipePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecipePageRoutingModule { }
