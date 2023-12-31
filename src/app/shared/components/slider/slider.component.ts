import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    products!: Recipe[];

    @ViewChild('container') container!: any

    public activeItem = 0;

    constructor(
        private recipeService: RecipeService,
        private router: Router) { }

    ngOnInit() {
        this.recipeService.getRecipe().subscribe({
            next: (rec: Recipe[]) => {
                this.products = rec;
                this.products = this.products.filter((m:any)=>{
                    if(m.favorite === true){
                     return m
                    }
                  })
            }
        })
    }
    public next() {
        this.activeItem = this.activeItem + 1320;
        if (this.activeItem > 2690) {
            this.activeItem = 0;
        }
        this.container.nativeElement.style.right = this.activeItem + 'px'
    }
    public prev() {
        if (this.activeItem < 1320) {
            this.activeItem = 3960;
        }
        this.activeItem = this.activeItem - 1320;
        this.container.nativeElement.style.right = this.activeItem + 'px'
    }

    public navigateToDetail(id:number){
        this.router.navigate([`recipe/${id}`])
    }

}




