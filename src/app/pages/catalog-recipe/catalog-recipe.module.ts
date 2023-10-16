import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRecipeRoutingModule } from './catalog-recipe-routing.module';
import { CatalogRecipeComponent } from './catalog-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CatalogRecipeComponent],
  imports: [
    CommonModule,
    CatalogRecipeRoutingModule,
    SharedModule
  ]
})
export class CatalogRecipeModule { }
