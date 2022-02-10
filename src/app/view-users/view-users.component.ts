import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
 
  userId: string = '';
  userDetails : any ;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(data =>{
    this.userId = data.id ;
    console.log("User" , this.userId)
   })

   this.usersService.viewUser(this.userId).subscribe(data =>{
     console.log(data);
     this.userDetails = data;
   })
  }

}
