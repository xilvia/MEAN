import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  user: User;
  //id: number;

  constructor(
    private us: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = (this.ar.snapshot.params['id'])
    this.us.getOne(id).subscribe(user => { this.user = user[0] });
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.us.update(this.user).subscribe(
      user => {
        this.router.navigateByUrl("/")

      }, err => console.error(err)

    )

  }

}
