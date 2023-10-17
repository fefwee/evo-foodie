import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-other-recipe',
  templateUrl: './other-recipe.component.html',
  styleUrls: ['./other-recipe.component.css']
})
export class OtherRecipeComponent implements OnInit {

  public otherRecipe:any = [];

  constructor(private servie:RecipeService,
  ) { }

  ngOnInit(): void {
    this.getOtherRecipe( )
  }

  public getOtherRecipe(){
    
    this.servie.getRandomRecipe(4).subscribe({
      next:(value)=>{
        this.otherRecipe = value;
      }
    })
  }

}
