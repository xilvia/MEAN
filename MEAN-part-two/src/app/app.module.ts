import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './page/users/users.component';
import { UpdateUsersComponent } from './page/update-users/update-users.component';
import { CreateUsersComponent } from './page/create-users/create-users.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortbynamePipe } from './pipe/sortbyname.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UpdateUsersComponent,
    CreateUsersComponent,
    NavComponent,
    FilterPipe,
    SortbynamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
