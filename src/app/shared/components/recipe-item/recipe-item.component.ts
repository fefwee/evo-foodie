import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  constructor(private service: RecipeService,
  ) { }

  public recipe: any = [];

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next: (val) => {
        this.recipe = val;
      }
    })
  }
}
