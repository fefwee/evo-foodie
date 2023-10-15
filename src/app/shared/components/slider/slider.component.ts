import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    products!: any[];


     responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
 
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.getRecipe().subscribe({
            next: (rec: any) => {
                this.products = rec
            }
        })
    }

}




