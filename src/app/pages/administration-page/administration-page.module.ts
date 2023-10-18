import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationPageRoutingModule } from './administration-page-routing.module';
import { AdministrationPageComponent } from './administration-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRecipeComponent } from './admin-recipe/admin-recipe.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AdministrationPageComponent, AdminUsersComponent, AdminRecipeComponent],
  imports: [
    MatDialogModule,
    MatButtonModule,
    TableModule,
    ButtonModule,
    MatTabsModule,
    CommonModule,
    AdministrationPageRoutingModule
  ]
})
export class AdministrationPageModule { }
