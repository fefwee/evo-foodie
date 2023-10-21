import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-recipe-item-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RecipeItemDetailComponent implements OnInit {

  public selectRecipe = [
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'As for me, I cant say that food is just a fuel but its surely',
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    }
  ]

  public recipeObj: any

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService,
    public dialog: MatDialog,

  ) {
    route.url.subscribe({
      next: (() => {
        this.changeRecipe()

      })
    })
  }



  public changeRecipe() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRecipeId(Number(id)).subscribe({
      next: (recipe: RecipeItem) => {
        this.recipeObj = recipe
      }
    })
  }
  ngOnInit(): void {
  }


  openDialog(recipe: boolean): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        isRecipe: recipe
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





}
