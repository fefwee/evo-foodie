import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  public addNewBook: any = {
    nameBook: '',
    auctor: ''
  };

  private userData: any = {
    email: '',
    password: ''
  }

  constructor(private service: AuthUserService) { }

  ngOnInit(): void {
  }

  public onSubmit(event: any) {


  }

  public login(event: any) {

    this.userData = {
      username: event.username,
      password: event.password
    }
    this.service.loginUser(this.userData).subscribe({
      next: () => {

      }
    })

  };
}
