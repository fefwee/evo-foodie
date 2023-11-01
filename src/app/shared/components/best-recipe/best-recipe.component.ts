import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { AddToFavorite, DeleteFavorite } from 'src/app/store/models/recipe.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css'],
  providers: [MessageService]
})
export class BestRecipeComponent implements OnInit {

  public isFavorite: boolean = false;
  public recipe: Recipe[] = [];
  public visibleButton = true;

  constructor(private service: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private messageService: MessageService) { }


  ngOnInit(): void {

    this.service.getRandomRecipe(4).subscribe({
      next: (val: Recipe[]) => {

        val.forEach((val) => {
          val.favorite = false;
        })

        this.recipe = val

      }
    })
  }


  public navigateTorecipDetail(id: number): void {

    this.router.navigate([`recipe/${id}`])

  }

  public setFavoriteValue(id: number) {

    this.recipe.forEach((element: any) => {
      if (element.id === id && element.favorite === false) {
        element.favorite = !element.favorite;
        this.messageService.add({ severity: 'success', summary: '', detail: 'Добавлено в избранное' });
        return this.store.dispatch(new AddToFavorite(id))
      }

      if (element.id === id && element.favorite === true) {
        element.favorite = !element.favorite;
        this.messageService.add({ severity: 'error', summary: '', detail: 'Удалено из избранного' });
        return this.store.dispatch(new DeleteFavorite(id))
      }

      return element
    });
  }


  moreRecipe() {
    this.service.getRandomRecipe(4).subscribe({
      next: (val: Recipe[]) => {
        val.forEach((val) => {
          val.favorite = false;
        })
        this.recipe.push(...val);
        this.visibleButton = false;
      }
    })
  };
}
