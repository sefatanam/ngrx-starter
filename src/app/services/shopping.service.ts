import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './interfaces/ApiService';
import {IShoppingModel} from '../store/models/interfaces/IShopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService extends ApiService<IShoppingModel> {

  constructor(public httpClient: HttpClient) {
    super(httpClient,'shopping');
  }

}
