import { Component, OnInit, inject } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-recipe',
  templateUrl: './admin-recipe.component.html',
  styleUrls: ['./admin-recipe.component.css'],
})
export class AdminRecipeComponent implements OnInit {

  public recipes: Recipe[] = [];
  public isDelete!:boolean

  constructor(private service: RecipeService,
    public dialog: MatDialog,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next: (recipe: Recipe[]) => {
        this.recipes = recipe
      }
    })
  }

  openDialog(recipe:boolean):void {
    const dialogRef = this.dialog.open(ModalComponent,{
     data:{
      isRecipe:recipe
     }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigateToRecipe(id:number){
     this.router.navigate([`admin/recipes/${id}`])
  };
}


