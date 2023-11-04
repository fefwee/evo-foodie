import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipePageComponent } from './create-recipe-page.component';
import { CreateRecipeFormComponent } from '../../shared/components/create-recipe-form/create-recipe-form.component';
import { EditPageComponent } from 'src/app/shared/components/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRecipePageComponent,
  },
  {
    path:':id',
    component:EditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRecipePageRoutingModule { }
