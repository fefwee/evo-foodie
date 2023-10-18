import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent implements OnInit {

  public recipe: any = new Set([]);
  public visibleButton = true;
  constructor(private service: RecipeService) { }


  ngOnInit(): void {
    this.service.getRandomRecipe(4).subscribe({
      next: (val) => {
        this.recipe = val;
      }
    })
  }



  moreRecipe() {
    this.service.getRandomRecipe(4).subscribe({
      next: (val) => {
        this.recipe.push(...val);
        this.visibleButton = false;
      }
    })
  };

}
