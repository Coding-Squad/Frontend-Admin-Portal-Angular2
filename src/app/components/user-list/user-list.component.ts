import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private selectedUser: User;
  private userList:User[]; 

  constructor(private router:Router, private userService:UserService) { }

  onSelect(user:User){
    this.selectedUser=user;
    this.router.navigate(['/viewUser', this.selectedUser.id]);
  }

  getUserList(){
    this.userService.getUserList().subscribe(
      res => {
        console.log(res.json());
        this.userList=res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getUserList();
  }

}
