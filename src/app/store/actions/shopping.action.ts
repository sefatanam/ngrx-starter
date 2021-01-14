import {Action} from '@ngrx/store';
import {IShoppingModel} from '../models/interfaces/IShopping.model';

export enum ShoppingActionType {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionType.ADD_ITEM;

  constructor(public payload: IShoppingModel) {
  }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionType.DELETE_ITEM;

  constructor(public payload: number) {
  }
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
