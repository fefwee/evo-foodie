import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.css']
})
export class RecipeItemDetailComponent implements OnInit {


  public recipeObj!:any/* =  {
    id: 0,
    title: '',
    tags: '',
    user: undefined,
    image: '',
    body: '',
    timeCooking: 0,
    foodValue: undefined,
    comments: [],
    additionalInformation: undefined,
    favorite: false
  } */

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getRecipeId(Number(id)).subscribe({
      next: (recipe:RecipeItem) => {
        this.recipeObj = recipe
      }
    })
  }


}
