import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { FavoriteState } from 'src/app/store/favorite.state';
import { AddToFavorite, DeleteFavorite } from 'src/app/store/models/recipe.model';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent implements OnInit {


  public isFavorite: boolean = false;
  public recipe: Recipe[] = [];
  public visibleButton = true;
  constructor(private service: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store) { }


  ngOnInit(): void {

    this.service.getRandomRecipe(4).subscribe({
      next: (val: Recipe[]) => {
        val.forEach((val) => {
          val.favorite = false;
        })
        this.recipe = val
      }
    })
    this.store.select(FavoriteState.getRecipe).subscribe({
      next: (val) => {


      }
    })
  }

/*   public toggle() {
    this.isFavorite = !this.isFavorite
  } */

  public navigateTorecipDetail(id: number): void {
    this.router.navigate([`recipe/${id}`])
  }

  public setFavoriteValue(id: number) {

    this.recipe = this.recipe.map((m: any) => {


      if (m.id === id) {
        m.favorite = !m.favorite;
      } else {
        this.store.dispatch(new DeleteFavorite(id))
      }
      return m
    })

    console.log(this.recipe.values());
    this.store.dispatch(new AddToFavorite(id))

  }


  moreRecipe() {
    this.service.getRandomRecipe(4).subscribe({
      next: (val: Recipe[]) => {
        this.recipe.push(...val);
        this.visibleButton = false;
      }
    })
  };



}
