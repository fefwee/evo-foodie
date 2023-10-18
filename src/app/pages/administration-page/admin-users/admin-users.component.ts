import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-interface';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  constructor(private service: AuthUserService) { }

  public users:User[] = [];

  ngOnInit(): void {
    this.service.getAllUsers().subscribe({
      next:(users:User[])=>{
        this.users = users;
      }
    })
  }

}
