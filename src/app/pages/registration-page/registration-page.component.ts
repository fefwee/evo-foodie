import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';

interface userData {
  email: string
  password: string
}
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private service: AuthUserService) { }

  private userData: userData = {
    email: '',
    password: ''
  };

  ngOnInit(): void { }

  public onSubmit(event: any) {

    this.userData = {
      email: event.username,
      password: event.password
    }
    this.service.registrationUser(this.userData).subscribe({
      next: () => {
      }
    })
  }

  public registration() {
    this.service.registrationUser(this.userData)
  }


}
