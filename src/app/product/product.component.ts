import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  data: Product = {
    img: "",
    title: "",
    author: "",
    stars: 0,
    discountPrice: 0,
    actualPrice: 0
  }

  @Output()
  myEvent = new EventEmitter();
  
  addToCart(data: Product) {
    this.myEvent.emit(data)
  }
}
