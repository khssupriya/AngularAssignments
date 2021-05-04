import { Component } from '@angular/core';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = []
  user: User = {
    username: '',
    dob: '',
    email: ''
  };

  addUserData() {
    console.log(this.user)
    this.users.push(this.user)
    this.user = {
      username: '',
      dob: '',
      email: ''
    }
  }

  deleteUserData(ind: number) {
    this.users.splice(ind, 1);
  }
}
