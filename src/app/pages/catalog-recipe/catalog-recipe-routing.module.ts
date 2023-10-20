import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogRecipeComponent } from './catalog-recipe.component';
import { RecipeItemDetailComponent } from 'src/app/shared/components/recipe-item-detail/recipe-item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogRecipeComponent,
  },
  {
    path: ':id',
    component: RecipeItemDetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRecipeRoutingModule { }
