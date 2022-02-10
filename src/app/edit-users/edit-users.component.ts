import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  userId: any;
  userDetails: any;
  editUserForm : FormGroup = new FormGroup({});
  loadingData : boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadingData = false;
    //capturing the data
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data.id; 
      console.log("Edit" , this.userId);
    });
    if(this.userId !== ''){
      this.usersService.viewUser(this.userId).toPromise().then(data=>{
       this.userDetails = data;
       console.log("User Details" , this.userDetails);

       //Buid the edit form
        this.editUserForm = this.fb.group({
          'name' : new FormControl(this.userDetails.name),
          'email' : new FormControl(this.userDetails.email),
        })
        this.loadingData = true;
      }).catch(err =>{
        this._snackBar.open("Unable to edit User Details");
      })
    }

  }

  updateUserCall(){
    this.usersService.userUpdated(this.userId, this.editUserForm.value).subscribe(data =>{
      this._snackBar.open("User Updated successfully");
    console.log("Updated User" , this.editUserForm.value);
    })
  }
}
