import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = []

  // inject object for data service class
  constructor(private csObj: CartService) {}

  ngOnInit() {
    // object initialization logic
    this.products = this.csObj.getData();
  }

}
