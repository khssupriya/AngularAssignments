import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any[] = []

  addUserData(ref: any) {
    let userObject=ref.value;
    this.users.push(userObject);
    ref.reset();
  }
}
