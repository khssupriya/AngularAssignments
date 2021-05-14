import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // inject HttpClient service object
  constructor(private hc: HttpClient) {}

  private _url: string = "assets/data.json";

  private products: Product[] = [] 

  getData(): Observable<Product[]> {
    // http get request
    return this.hc.get<Product[]>(this._url);
  }

  
  
}
