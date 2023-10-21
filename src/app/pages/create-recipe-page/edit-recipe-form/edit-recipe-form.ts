import { Component, OnInit } from "@angular/core";
import { CreateRecipeFormComponent } from "../create-recipe-form/create-recipe-form.component";

@Component({
  templateUrl: '../create-recipe-form/create-recipe-form.component.html',
  styleUrls: ['../create-recipe-form/create-recipe-form.component.css']
})

export class EditRecipeForm extends CreateRecipeFormComponent implements OnInit {

  public override obj!: any
  public override title = 'Редактирование рецепта:'
  public override submitBtn = 'Редактировать рецепт '
  public override imageBlock = false;

  override ngOnInit(): void {
    this.createForm()
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRecipeId(Number(id)).subscribe({
      next: (val => {
        this.obj = val  
      })
    })
  }
}