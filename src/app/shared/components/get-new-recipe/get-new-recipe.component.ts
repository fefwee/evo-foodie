import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-get-new-recipe',
  templateUrl: './get-new-recipe.component.html',
  styleUrls: ['./get-new-recipe.component.css'],
  providers: [MessageService]
})
export class GetNewRecipeComponent implements OnInit {

  public registerForm!: FormGroup;
  public submitted = false;
  public subscribe = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]],
    });
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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Вы успешно подписались' });
}


}


