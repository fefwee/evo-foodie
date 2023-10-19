import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRecipePageRoutingModule } from './create-recipe-page-routing.module';
import { CreateRecipePageComponent } from './create-recipe-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRecipeFormComponent } from './create-recipe-form/create-recipe-form.component';

@NgModule({
  declarations: [CreateRecipePageComponent, CreateRecipeFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateRecipePageRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class CreateRecipePageModule { }
