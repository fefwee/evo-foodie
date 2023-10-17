import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements  OnInit {

  public comments:any = [];
  constructor(private service:RecipeService){}

  ngOnInit(): void {
    this.service.getRecipe().subscribe({
      next:(value)=>{
        this.comments = value
      }
    })
  }

}
