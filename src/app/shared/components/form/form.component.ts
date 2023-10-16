import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() title!: string;
  @Output() login: EventEmitter<any> = new EventEmitter();
  public isFormSubmited = false;
  public loginForm!: FormGroup;
  @Input() isLogin = true;

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  };
  onSave() {
    this.login.emit(this.loginForm.value)
  };

  submitUser() {
    this.isFormSubmited = true
    if (this.loginForm.value === 0 ) {
      return
    }
  }

}
