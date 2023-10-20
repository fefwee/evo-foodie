import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { AuthUser } from 'src/app/store/models/user.model';


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

  constructor(private service: AuthUserService,
    private store: Store,
    public router:Router) { }

  ngOnInit(): void {
  }

  public login(event: any) {

    this.userData = {
      username: event.username,
      password: event.password
    }
    this.store.dispatch(new AuthUser(this.userData) )
    this.router.navigate(['/'])
  };
}
