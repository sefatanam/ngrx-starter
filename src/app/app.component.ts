import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/interfaces/ShoppingItem';
import { Store } from '@ngrx/store';
import { AppState } from './store/states/AppState';
import {AddItemAction, DeleteItemAction, LoadShoppingAction} from './store/actions/shopping.action';
import {ShoppingService} from './services/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<number | Error>;
  newShoppingItem: ShoppingItem = { id: 0, name: '' };

  constructor(private stores: Store<AppState>, private service: ShoppingService) {
  }

  ngOnInit(): void {
    // this.shoppingItem$ = this.store.select(store => store.shopping);
    this.service.getShoppingItems().subscribe(res=>console.log(res))
    this.shoppingItems$ = this.stores.select(store => store.shopping.list);
    this.loading$ = this.stores.select(store => store.shopping.loading);
    this.error$ = this.stores.select(store => store.shopping.error);

    this.stores.dispatch(new LoadShoppingAction());
  }

  addItem($event): void {
    $event.preventDefault();
    this.newShoppingItem.id = Math.random() * 0.23;
    this.stores.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: 0, name: '' };
  }

  deleteItem(id: number): void {
    this.stores.dispatch(new DeleteItemAction(id));
  }


}
