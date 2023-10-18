import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-admin-recipe',
  templateUrl: './admin-recipe.component.html',
  styleUrls: ['./admin-recipe.component.css'],
})
export class AdminRecipeComponent implements OnInit {

  constructor(private service: RecipeService,
    public dialog: MatDialog) { }

  public recipes: Recipe[] = [];

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next: (recipe: Recipe[]) => {
        this.recipes = recipe
      }
    })
  }

}


