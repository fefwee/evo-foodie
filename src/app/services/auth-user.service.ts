import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user-interface';

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

  public getAllUsers():Observable<User[]> {
    const headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NzY0MDQwMiwiZXhwIjoxNjk3NjQ3NjAyfQ.R_-SZVWgpVDI2Gdu69Bh3zOgScmf7iNtc-jMJJK_E-A') 
    return this.http.get<User[]>('https://ea-backend.wckz.space/users',{headers:headers})
  }

}
