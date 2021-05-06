import { Component } from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

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

}
