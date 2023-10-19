import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-other-recipe',
  templateUrl: './other-recipe.component.html',
  styleUrls: ['./other-recipe.component.css']
})
export class OtherRecipeComponent implements OnInit {

  public otherRecipe: Recipe[] = [];

  constructor(private servie: RecipeService,
  ) { }

  ngOnInit(): void {
    this.getOtherRecipe()
  }

  public getOtherRecipe() {

    this.servie.getRandomRecipe(4).subscribe({
      next: (value: Recipe[]) => {
        this.otherRecipe = value;
      }
    })
  }

}
