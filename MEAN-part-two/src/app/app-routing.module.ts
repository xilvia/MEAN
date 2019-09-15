import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './page/users/users.component';
import { UpdateUsersComponent } from './page/update-users/update-users.component';
import { CreateUsersComponent } from './page/create-users/create-users.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UpdateUsersComponent
  },
  {
    path: 'create-user',
    component: CreateUsersComponent
  },
  {
    path: '**',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
