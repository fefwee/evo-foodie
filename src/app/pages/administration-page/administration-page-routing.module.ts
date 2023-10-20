import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationPageComponent } from './administration-page.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipeComponent } from './admin-recipe/admin-recipe.component';
import { CreateRecipeFormComponent } from '../create-recipe-page/create-recipe-form/create-recipe-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPageComponent,
    children: [
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'recipes',
        component: AdminRecipeComponent,
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationPageRoutingModule { }
