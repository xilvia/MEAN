import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list$: Observable<any> = this.us.read();
  searchText = '';

  constructor(
    private us: UserService,
    private ar: ActivatedRoute,
    private router: Router) {
    us.access()
  }


  ngOnInit() {

  }

  onDelete(id: number): void {
    this.us.delete(id).forEach(data => console.log(data))
  }

}
