import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  // dataSource = ELEMENT_DATA;
 
  listUser: User[] = [];
  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
   this.usersService.listUser().subscribe( data=>{
     this.listUser = data ; 
   })
   
  }

  


}
