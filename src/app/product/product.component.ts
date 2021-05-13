import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input()
  data: Product = {
    img: "",
    title: "",
    author: "",
    stars: 0,
    discountPrice: 0,
    actualPrice: 0
  }

  addedToCart: boolean = false;

  constructor(private csObj: CartService) {
  }

  ngOnInit() {
    this.addedToCart = this.csObj.cart.includes(this.data);
  }

  @Output()
  myEvent = new EventEmitter();
  
  addToCart() {
    this.myEvent.emit(this.data)
    this.csObj.setData(this.data);
    this.addedToCart = true;
  }

  removeFromCart() {
    this.csObj.removeData(this.data);
    this.addedToCart = false;
  }
}
