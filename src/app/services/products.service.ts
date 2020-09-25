import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  getProducts(): Observable<string[]> {
    return of(['product1', 'product2', 'product3', 'product4']);
  }
}
