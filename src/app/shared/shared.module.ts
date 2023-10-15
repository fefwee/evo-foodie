import { GalleriaModule } from 'primeng/galleria';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { MatMenuModule } from '@angular/material/menu';
import { SliderComponent } from './components/slider/slider.component';
import { BestRecipeComponent } from './components/best-recipe/best-recipe.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './components/form/form.component'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MatMenuModule,
    GalleriaModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    NavBarComponent,
    SliderComponent,
    BestRecipeComponent,
    BestRecipeComponent,
    FormComponent
  ],
  exports: [
    NavBarComponent,
    SliderComponent,
    BestRecipeComponent
  ]
})
export class SharedModule { }