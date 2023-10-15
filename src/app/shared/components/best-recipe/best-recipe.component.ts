import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent implements OnInit {

  constructor(private service:RecipeService){}

  public recipe:any = [];

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next:(val)=>{
        this.recipe = val;
      }
    })
  }

}
