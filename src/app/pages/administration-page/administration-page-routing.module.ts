import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationPageComponent } from './administration-page.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipeComponent } from './admin-recipe/admin-recipe.component';
import { childRoleAccessGuard } from 'src/app/guards/child-role-access.guard';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPageComponent,
    canActivateChild: [childRoleAccessGuard], 
    children: [
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'recipes',
        component: AdminRecipeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationPageRoutingModule { }
