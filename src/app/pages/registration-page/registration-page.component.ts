import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private service: AuthUserService,
    private router: Router) { }

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
      error: (error:HttpErrorResponse) => {
        if(error.status === 404){
          
        }
      }
    })
    this.router.navigate(['/'])
  }

 


}
