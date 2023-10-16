import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-recipe',
  templateUrl: './catalog-recipe.component.html',
  styleUrls: ['./catalog-recipe.component.css']
})
export class CatalogRecipeComponent {

  constructor(private meta: Meta) {
    this.meta.addTags([
      { property: "og:«Foodie: Каталог рецептов", content: "Все самые лучшие рецепты собраны здесь" },
    ])
  }

}