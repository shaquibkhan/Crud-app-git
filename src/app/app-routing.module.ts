import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';


const routes: Routes = [
  {path: 'users' ,
  children : [
    {path: '', component: ListUsersComponent},
   {path: 'list', component: ListUsersComponent},
   {path: 'create' , component: AddUsersComponent },
   {path: 'edit/:id' , component: EditUsersComponent},
   {path: 'delete/:id' , component: DeleteUsersComponent},
   {path: 'view/:id' , component : ViewUsersComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
