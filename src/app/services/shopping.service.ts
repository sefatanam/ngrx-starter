import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ShoppingItem } from '../store/models/interfaces/ShoppingItem';
import {of} from 'rxjs';


const DATA: ShoppingItem[] = [{
  'id': 0,
  'name': 'Diet Coke'
}];


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = "http://localhost:3000/shopping"

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return of(DATA);
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem)
      .pipe(
        delay(500)
      )
  }

  deleteShoppingItem(id: number) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`)
      .pipe(
        delay(500)
      )
  }
}
