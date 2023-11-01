import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { AddToFavorite, DeleteFavorite } from 'src/app/store/models/recipe.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [MessageService]
})
export class RecipeItemComponent {

  @Input() elemnt!: number;
  @Input() btnVisible: boolean = true;
  @Input() stylesClass!: boolean;
  @Input() header = true;

  constructor(private service: RecipeService,
    protected router: Router,
    private store: Store,
    private messageService: MessageService
  ) { }

  public recipe: Recipe[] = [];

  ngOnInit(): void {
    this.service.getRandomRecipe(this.elemnt).subscribe({
      next: (val: Recipe[]) => {
        val.forEach((val) => {
          val.favorite = false;
        })
        this.recipe = val

      }
    })
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

  public navigateToRecipeDetail(id: number): void {
    this.router.navigate([`recipe/${id}`]);
  }


}


