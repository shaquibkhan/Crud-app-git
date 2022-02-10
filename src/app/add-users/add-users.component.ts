import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  
  addUserForm : FormGroup = new FormGroup({})
  userId: string = '';

  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'phone' : new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
  }
  createUser(){
    this.usersService.userCreated(this.addUserForm.value).subscribe(data=>{
      this._snackBar.open("User Created Successfully");
    // console.log(this.addUserForm.value);
    }, err=>{
      console.log("ERROR")
    })
  }

}
