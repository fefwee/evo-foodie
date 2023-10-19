import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRecipeRoutingModule } from './other-recipe-routing.module';
import { OtherRecipeComponent } from './other-recipe.component';


@NgModule({
  declarations: [OtherRecipeComponent],
  imports: [
    CommonModule,
    OtherRecipeRoutingModule
  ],
  exports:[OtherRecipeComponent]
})
export class OtherRecipeModule { }
