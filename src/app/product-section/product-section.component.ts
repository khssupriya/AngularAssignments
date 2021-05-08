import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {

  products: Product[] = [
    {
      img: "https://m.media-amazon.com/images/I/51j6Um0il9L._AC_UL480_FMwebp_QL65_.jpg",
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      stars: 5,
      discountPrice: 150,
      actualPrice: 225
    },
    {
      img: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg",
      title: "The Psychology of Money",
      author: "Morgan Housel ",
      stars: 4,
      discountPrice: 277,
      actualPrice: 399
    },
    {
      img: "https://m.media-amazon.com/images/I/61r-WomIz0L._AC_UY327_FMwebp_QL65_.jpg",
      title: "One Arranged Murder",
      author: "Chetan Bhagat ",
      stars: 3,
      discountPrice: 150,
      actualPrice: 225
    },
    {
      img: "https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki ",
      stars: 5,
      discountPrice: 546,
      actualPrice: 899
    },
    {
      img: "https://m.media-amazon.com/images/I/51+kE0KESsL._AC_UY327_FMwebp_QL65_.jpg",
      title: "And then there were None",
      author: "Agatha Christie ",
      stars: 4,
      discountPrice: 177,
      actualPrice: 300
    },
    {
      img: "https://m.media-amazon.com/images/I/91a0udfIPKL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      stars: 3,
      discountPrice: 149,
      actualPrice: 156
    },
    {
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY327_FMwebp_QL65_.jpg",
      title: "To kill a Mockingbird",
      author: "Harper Lee",
      stars: 3,
      discountPrice: 251,
      actualPrice: 399
    },
    {
      img: "https://m.media-amazon.com/images/I/817tHNcyAgL._AC_UY327_FMwebp_QL65_.jpg",
      title: "The Fault in our Stars",
      author: "John Green ",
      stars: 5,
      discountPrice: 240,
      actualPrice: 339
    }
  ]

  cart: Product[] = []

  addToCart(item: Product) {
    this.cart.push(item)
  }

}
