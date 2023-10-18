import { GalleriaModule } from 'primeng/galleria';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { MatMenuModule } from '@angular/material/menu';
import { SliderComponent } from './components/slider/slider.component';
import { BestRecipeComponent } from './components/best-recipe/best-recipe.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { DeliciousRecipesComponent } from './components/delicious-recipes/delicious-recipes.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { WhyWeComponent } from './components/why-we/why-we.component';
import { GetNewRecipeComponent } from './components/get-new-recipe/get-new-recipe.component';
import { MessagesModule } from 'primeng/messages';
import { RecipeItemDetailComponent } from './components/recipe-item-detail/recipe-item-detail.component';
import { OtherRecipeComponent } from '../pages/other-recipe/other-recipe.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NoAccessPageComponent } from './components/no-access-page/no-access-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [
    ConfirmDialogModule,
    MatDialogModule,
    MessagesModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    GalleriaModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    NavBarComponent,
    SliderComponent,
    BestRecipeComponent,
    BestRecipeComponent,
    FormComponent,
    FooterComponent,
    DeliciousRecipesComponent,
    RecipeItemComponent,
    WhyWeComponent,
    GetNewRecipeComponent,
    RecipeItemDetailComponent,
    OtherRecipeComponent,
    CommentsComponent,
    NoAccessPageComponent,
    ErrorPageComponent,

  ],
  exports: [
    NavBarComponent,
    SliderComponent,
    BestRecipeComponent,
    FormComponent,
    FooterComponent,
    WhyWeComponent,
    GetNewRecipeComponent,
    RecipeItemComponent,
    RecipeItemDetailComponent,
    OtherRecipeComponent,
  ],
})
export class SharedModule { }
