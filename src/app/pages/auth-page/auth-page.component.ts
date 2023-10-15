import { Component } from '@angular/core';

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

 


  public addBook(event:any) {
    console.log(event);
    
  };
}
