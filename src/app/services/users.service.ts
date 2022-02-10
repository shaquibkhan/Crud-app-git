import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  baseUrl : string = "https://jsonplaceholder.cypress.io/";

  constructor( private http : HttpClient, private activatedRoute: ActivatedRoute) { }

  listUser(): Observable<User[]>{
   return this.http.get<User[]>(this.baseUrl + 'users');
  }

  viewUser(id:string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  userCreated(userObj:any){
    return this.http.post(this.baseUrl + 'users' , userObj);
  }

  userDeleted(id:string){
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  userUpdated(id:any, userObj:any){  
    return this.http.put(this.baseUrl +'users/'+id, userObj );
  }
}
