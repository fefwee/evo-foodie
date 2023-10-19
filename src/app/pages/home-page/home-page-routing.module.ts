import { RecipeItemDetailComponent } from 'src/app/shared/components/recipe-item-detail/recipe-item-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
/*   {
    path: ':id',
    component: RecipeItemDetailComponent
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
