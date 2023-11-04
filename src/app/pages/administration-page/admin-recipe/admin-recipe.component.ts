import { Component, OnInit } from '@angular/core';
import { DeleteItemRecipe, Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-admin-recipe',
  templateUrl: './admin-recipe.component.html',
  styleUrls: ['./admin-recipe.component.css'],
})
export class AdminRecipeComponent implements OnInit {



  public recipes: Recipe[] = [];
  public isDelete!: boolean

  constructor(private service: RecipeService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
      route.url.subscribe({
        next: (() => {
          this.getRecipe()
        })
      })

  }

  ngOnInit(): void {
    this.getRecipe()
  }

  getRecipe() {
    this.service.getRecipe().subscribe({
      next: (recipe: Recipe[]) => {
        this.recipes = recipe

      }
    })
  }

  openDialog(recipe: boolean, id: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        submitBtn: 'delete',
        idItem: id,
        header: "Удалить этот рецепт?",
        content: "Вы хотите удалить этот рецепт?"
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      const id = this.route.snapshot.paramMap.get('id')
      console.log(`Dialog result: ${id}`);
    });
    dialogRef.componentInstance.changeSubmitModal.subscribe({
      next: (id: number) => {
        this.service.deleteRecipe(id).subscribe({
          next: (val: DeleteItemRecipe) => {
            if (val.deleted) {
              // бэк не удаляет элемент
              /*           this.getRecipe() */
              this.recipes = this.recipes.filter((m) => {
                console.log(m);
                return m.id != val.id

              })
              console.log(this.recipes);

            }
          }
        })

      }
    })

  }

  public navigateToRecipe(id: number) {
    this.router.navigate([`/create-recipe/${id}`])
  };
}


