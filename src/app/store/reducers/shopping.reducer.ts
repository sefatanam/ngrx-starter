import {IShoppingModel} from '../models/interfaces/IShopping.model';
import {ShoppingAction, ShoppingActionType} from '../actions/shopping.action';


/*
 * initial value of shopping reducer
 */
const initialState: Array<IShoppingModel> = [];

/**
 * Shopping Reducer
 * @param state
 * @param action
 * @constructor
 */

export function ShoppingReducer(state: Array<IShoppingModel> = initialState, action: ShoppingAction): IShoppingModel[] {
  switch (action.type) {
    case ShoppingActionType.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionType.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default :
      return state;
  }
}
