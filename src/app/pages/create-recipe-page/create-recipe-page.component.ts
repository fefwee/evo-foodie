import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {

  public createRecipeForm!: FormGroup;
  public isFormSubmited = false;

  constructor(private service: RecipeService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.createRecipeForm = new FormGroup({
      nameRecipe: new FormControl('', [Validators.required]),
      descRecipe: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
      timeCooking: new FormControl('', [Validators.required]),
      firsIngridient: new FormControl('', [Validators.required]),
      belki: new FormControl('', [Validators.required]),
      fats: new FormControl('', [Validators.required]),
      carbohydrates: new FormControl('', [Validators.required]),
      calories: new FormControl('', [Validators.required]),
      firstStep: new FormControl('', [Validators.required]),
      descFirstStep: new FormControl('', [Validators.required]),
    })
  };

  submit() {
    const ing1 = {}
    const ing2 = {}
    const value = this.createRecipeForm.value;
    const bodyRecip = {
      title: value.nameRecipe,
      body: value.descRecipe,
      tags: "string",
      image: value.image,
      favorite: true,
      timeCooking: value.timeCooking,
      foodValue: {
        calories: value.calories,
        fats: value.fats,
        carbohydrates: value.carbohydrates,
        belki: value.belki
      },
      additionalInformation: {
        ingredients: [
          ing1,
          ing2
        ],
        details: [
          {
            title: value.firstStep,
            body: value.descFirstStep
          }
        ]
      }
    }
    this.service.createRecipe(bodyRecip).subscribe()
    console.log(this.createRecipeForm);

  }

}
