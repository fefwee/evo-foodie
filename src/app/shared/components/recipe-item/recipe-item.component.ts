import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

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
    protected router: Router
  ) { }

  public recipe: any = [];

  ngOnInit(): void {
    this.service.getRandomRecipe(this.elemnt).subscribe({
      next: (val: any) => {
        this.recipe = val;
      }
    })
  }

 
}


