import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: User[];
searchUserName(username){
  this.userService.findUser(username).then(
    ()=>{
      this.users = this.userService.users 
      console.log(this.users);
    },
    (error)=>{
      console.log(error)
    }
  )
}
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.searchUserName('nimowairimu')
  }

}
