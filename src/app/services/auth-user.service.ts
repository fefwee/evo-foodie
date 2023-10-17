import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) {
  }


  public registrationUser(userdata: any) {
    return this.http.post('https://ea-backend.wckz.space/users/register', userdata)
  }

  public loginUser(userdata: any) {
    return this.http.post('https://ea-backend.wckz.space/users/login', userdata)
  }
}
