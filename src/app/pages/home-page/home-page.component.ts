import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  public recipe: Recipe[] = [];

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe({
      next: (rec: Recipe[]) => {
        this.recipe = rec
      }
    })
  }

}
