import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  user: User = new User;
  

  constructor(
    private us: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.us.create(this.user).subscribe(
      user => {
        
        this.router.navigateByUrl("/")

      }, err => console.error(err)

    )

  }
}
