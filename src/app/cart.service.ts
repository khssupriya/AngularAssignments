import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Product[] = []

  getData(): Product[] {
    return this.cart;
  }

  setData(data: Product) {
    this.cart.push(data);
  }

  removeData(data: Product) {
    // possibly done using a UID
    this.cart.splice(this.cart.indexOf(data), 1);
  }
}
