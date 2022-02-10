import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {
  userId : string = '';

  constructor(private usersService: UsersService, private _snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
      this.activatedRoute.params.subscribe(data =>{
        this.userId = data.id;
      });
      if(this.userId){
      this.usersService.userDeleted(this.userId).subscribe(data=>{
        this._snackBar.open("User Deleted Successfully");
      }, err=>{
        this._snackBar.open("Unable to Delete User");
      })
    }
  }
    
}
