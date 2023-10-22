import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { AddToFavorite } from 'src/app/store/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() elemnt!: number;
  @Input() btnVisible: boolean = true;
  @Input() stylesClass!: boolean;

  constructor(private service: RecipeService,
    protected router: Router,
    private store: Store
  ) { }

  public recipe: Recipe[] = [];

  ngOnInit(): void {
    this.service.getRandomRecipe(this.elemnt).subscribe({
      next: (val: Recipe[]) => {
        val.forEach((val)=>{
          val.favorite = false;
        })
        this.recipe = val
       
      }
    })
  }


  public setFavoriteValue(id: number) {
    this.recipe = this.recipe.map((m: any) => {
      if (m.id === id) {
        m.favorite = !m.favorite;
      }
      return m
    })

    console.log(this.recipe.values());
    this.store.dispatch(new AddToFavorite(id))
  }

  public navigateToRecipeDetail(id: number): void {
    this.router.navigate([`recipe/${id}`]);
  }


}


