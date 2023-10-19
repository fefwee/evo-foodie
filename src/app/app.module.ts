import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthUserService } from './services/auth-user.service';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [AuthUserService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
