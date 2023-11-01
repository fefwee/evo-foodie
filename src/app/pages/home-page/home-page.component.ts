import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private recipeService: RecipeService,
    private meta: Meta) {
    this.meta.addTags([
      { property: "og:title", content: "«Foodie: Главная»" },
      { property: "og:description", content: "Сборник кулинарных рецептов, для всей семьи" },
    ])
  }

  public recipe: Recipe[] = [];

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe({
      next: (rec: Recipe[]) => {
        this.recipe = rec
      }
    })
  }

}
