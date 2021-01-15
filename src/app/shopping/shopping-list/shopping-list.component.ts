import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IShoppingModel} from '../../store/models/interfaces/IShopping.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/states/app-state.model';
import {AddItemAction, DeleteItemAction} from '../../store/actions/shopping.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  shoppingItem$: Observable<Array<IShoppingModel>>;
  newShoppingItem: IShoppingModel = {id: 0, name: ''};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.shoppingItem$ = this.store.select(store => store.shopping);
  }

  addItem($event): void {
    $event.preventDefault();
    this.newShoppingItem.id = 123;
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: 0, name: ''};
  }

  deleteItem(id: number): void {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
