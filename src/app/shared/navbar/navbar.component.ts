import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ShoppingItem} from '../../core/store/models/interfaces/ShoppingItem';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/store/states/AppState';
import {LoadShoppingAction} from '../../core/store/actions/shopping.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shoppingItems$ : Observable<Array<ShoppingItem>>;
  constructor(private stores : Store<AppState>) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.stores.select(store=>store.shopping.list);
    this.stores.dispatch(new LoadShoppingAction());
  }

}
