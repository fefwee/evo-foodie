import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-new-recipe',
  templateUrl: './get-new-recipe.component.html',
  styleUrls: ['./get-new-recipe.component.css']
})
export class GetNewRecipeComponent implements OnInit {

  public messages: any;
  public registerForm!: FormGroup;
  public submitted = false;
  public subscribe = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]],
    });

    this.messages = [{ severity: 'success', summary: 'Success', detail: 'Вы подписались на рассылку' }];
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid && this.registerForm.value === 0) {
      return;
    }
    this.subscribe = true
  }



}


