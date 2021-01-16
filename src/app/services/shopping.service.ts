import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from '../store/models/interfaces/ShoppingItem';
import {ApiService} from './interfaces/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends ApiService<ShoppingItem> {

  constructor(public http: HttpClient) {
    super(http, 'shopping');
  }

}
