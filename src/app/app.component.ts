import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itemsList';

  item: string = "";

  items: string[] = []

  showitems: boolean = false;

  toggleButtonValue: string = "Show items";
  
  addItem() {
    this.items.push(this.item)
    this.item = '';
  }

  deleteItem(ind: number) {
    this.items.splice(ind, 1)
  }

  toggleDisplay() {
    this.showitems = !this.showitems;
    if(this.toggleButtonValue == "Show Items") {
      this.toggleButtonValue = "Hide items";
    } else {
      this.toggleButtonValue = "Show items";
    }
  }

}
