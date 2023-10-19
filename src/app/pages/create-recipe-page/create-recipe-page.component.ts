import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {


  constructor(private service: RecipeService) { }

  ngOnInit(): void {
  }


  createRecipe(event: any) {
    const ing1 = {}
    const ing2 = {}
    const bodyRecip = {
      title: event.nameRecipe,
      body: event.descRecipe,
      tags: "string",
      image: event.image,
      favorite: true,
      timeCooking: Number(event.timeCooking),
      foodValue: {
        calories: event.calories,
        fats: event.fats,
        carbohydrates: event.carbohydrates,
        belki: event.belki
      },
      additionalInformation: {
        ingredients: [
          ing1,
          ing2
        ],
        details: [
          {
            title: event.firstStep,
            body: event.descFirstStep
          }
        ]
      }
    }
    this.service.createRecipe(bodyRecip).subscribe()
    console.log(bodyRecip);

  }


}
