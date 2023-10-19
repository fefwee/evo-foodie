import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.css']
})
export class CreateRecipeFormComponent implements OnInit {


  @Input() title!: boolean;
  @Input() btnTitle = true;
  @Input() imageBlock = false;
  @Output() login: EventEmitter<any> = new EventEmitter();
  public createRecipeForm!: FormGroup;
  public isFormSubmited = false;

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.createRecipeForm = new FormGroup({
      nameRecipe: new FormControl('', [Validators.required]),
      descRecipe: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
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
    this.login.emit(this.createRecipeForm.value)
  };
}
