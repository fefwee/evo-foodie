import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';


interface userData {
  username: string
  password: string
};
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {


  private userData: userData = {
    username: '',
    password: ''
  };

  constructor(private service: AuthUserService) { }

  ngOnInit(): void {
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
