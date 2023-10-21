import { Component, OnInit, inject } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next: (recipe: Recipe[]) => {
        this.recipes = recipe
      }
    })
  }

  openDialog(recipe:boolean,id:number):void {
    const dialogRef = this.dialog.open(ModalComponent,{
     data:{
      isRecipe:recipe,
      idItem:id
     }

    });

    dialogRef.afterClosed().subscribe(result => {
     const id =  this.route.snapshot.paramMap.get('id')
      console.log(`Dialog result: ${id}`);
    });
  }

  public navigateToRecipe(id:number){
     this.router.navigate([`admin/recipes/${id}`])
  };
}


