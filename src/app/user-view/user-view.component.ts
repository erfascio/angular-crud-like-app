import { Component, OnInit } from '@angular/core';
import { User } from 'src/interface/User';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  user: User = this.initUser();

  constructor() {}

  ngOnInit(): void {}

  initUser() {
    return (this.user = {
      username: '',
      name: '',
      surname: '',
      group: '',
    });
  }

  setCurrentUser(newUser: User) {
    this.user = newUser;
  }

  getUserInformation(): User {
    const { username, name, surname, group } = this.user;
    return {
      username,
      name,
      surname,
      group,
    };
  }
}
