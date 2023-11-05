import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public idItem: any =
    {
      id: 0,
      recipe: []
    };



  constructor(
    private route: ActivatedRoute,
    private service: RecipeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.idItem.id = id;
    this.service.getRecipeId(Number(id)).subscribe({
      next: ((val: any) => {
        this.idItem.recipe = val;
      })
    })
  }

  onsave(event: any) {
    console.log(event);

    const ing1 = {}
    const ing2 = {}
    const bodyRecip = {
      title: event.nameRecipe,
      body: event.descRecipe,
      tags: "string",
      image: 'string',
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
  }






}
