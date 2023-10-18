import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { NoAccessPageComponent } from './shared/components/no-access-page/no-access-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/registration-page/registration-page.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/catalog-recipe/catalog-recipe.module').then(m => m.CatalogRecipeModule)
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./pages/create-recipe-page/create-recipe-page.module').then(m => m.CreateRecipePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/administration-page/administration-page.module').then(m => m.AdministrationPageModule)
  },
  {
    path: 'access',
    component: NoAccessPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
