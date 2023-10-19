import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherRecipeComponent } from './other-recipe.component';
import { RecipeItemDetailComponent } from 'src/app/shared/components/recipe-item-detail/recipe-item-detail.component';

const routes: Routes = [
  {
    path:'',
    component:OtherRecipeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRecipeRoutingModule { }
