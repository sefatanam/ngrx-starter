import {Action} from '@ngrx/store';
import {IShoppingModel} from '../models/interfaces/IShopping.model';

export enum ShoppingActionType {
  ADD_ITEM = '[SHOPPING] Add Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionType.ADD_ITEM;

  constructor(public payload: IShoppingModel) {
  }
}

export type ShoppingAction = AddItemAction;
