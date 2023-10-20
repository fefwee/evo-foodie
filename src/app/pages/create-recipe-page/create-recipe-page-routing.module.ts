import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipePageComponent } from './create-recipe-page.component';
import { CreateRecipeFormComponent } from './create-recipe-form/create-recipe-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRecipePageComponent,
  },
  {
    path: 'id',
    component: CreateRecipeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecipePageRoutingModule { }
