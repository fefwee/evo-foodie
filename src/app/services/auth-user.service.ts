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
    const headers = new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NzY1MjM2MCwiZXhwIjoxNjk3NjU5NTYwfQ.JghH67DBNv-nuGo2OoL-_XDqedOMJltTKf0-PFS-DnA') 
    return this.http.get<User[]>('https://ea-backend.wckz.space/users',{headers:headers})
  }

}
