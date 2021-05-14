import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {DataService} from '../data.service'

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit{

  products: Product[] = []

  // inject object for data service class
  constructor(private dsObj: DataService) {}

  ngOnInit() {
    // object initialization logic
    this.dsObj.getData().subscribe(data => {
      this.products = data;
    },
    err => {
      console.log("Something went wrong!")
    }
    );
  }

  cart: Product[] = []

  addToCart(item: Product) {
    this.cart.push(item)
  }

}
