import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { userStateModel } from 'src/app/store/models/user.model';
import { UserState } from 'src/app/store/user.state';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: userStateModel = {
    access_token: undefined,
    role: undefined,
    username: undefined,
    id: undefined,
    fullname: undefined,
    image: undefined,
    isAuth: false
  }

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.select(UserState.getUser).subscribe({
      next: (user: userStateModel) => {
        this.user = user
      }
    })
  }

}
