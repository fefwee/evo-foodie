import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent implements OnInit {

  public recipe: any = new Set([]);
  public visibleButton = true;
  constructor(private service: RecipeService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    
    this.service.getRandomRecipe(4).subscribe({
      next: (val:Recipe[]) => {
        this.recipe = val;
      }
    })
  }



  moreRecipe() {
    this.service.getRandomRecipe(4).subscribe({
      next: (val:Recipe[]) => {
        this.recipe.push(...val);
        this.visibleButton = false;
      }
    })
  };

}
