import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';



interface ItenObj {
  id:number,
  recipe:any
}


@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.css']
})
export class CreateRecipeFormComponent implements OnInit {

  @Input() item:ItenObj | undefined;
  
  public obj!: any
  public id!: number;
  public title: string = 'Создание рецепта'
  public submitBtn = 'Отправить рецепт '
  public imageBlock = true;
  @Output() login: EventEmitter<any> = new EventEmitter();
  public createRecipeForm!: FormGroup;
  public isFormSubmited = false;

  constructor(private router: Router,
    protected service: RecipeService,
    protected route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm()
    console.log(this.item);
    
  }

  createForm() {
    this.createRecipeForm = new FormGroup({
      nameRecipe: new FormControl('', [Validators.required]),
      descRecipe: new FormControl('', [Validators.required]),
      categories: new FormControl('', [Validators.required]),
      timeCooking: new FormControl('', [Validators.required]),
      firsIngridient: new FormControl('', [Validators.required]),
      belki: new FormControl('', [Validators.required]),
      fats: new FormControl('', [Validators.required]),
      carbohydrates: new FormControl('', [Validators.required]),
      calories: new FormControl('', [Validators.required]),
      firstStep: new FormControl('', [Validators.required]),
      descFirstStep: new FormControl('', [Validators.required]),
    })
  };

  onSave() {
    /*  this.login.emit({
       formValue: this.createRecipeForm.value,
       type: 'CREATE_RECIPE',
       id:}); */

  };



}
