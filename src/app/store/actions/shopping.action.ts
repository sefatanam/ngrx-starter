import {Action} from '@ngrx/store';
import {IShoppingModel} from '../models/interfaces/IShopping.model';

/**
 * Shopping Action Types
 */
export enum ShoppingActionType {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item'
}


/**
 * Load Shopping from database init
 */
export class LoadShoppingAction implements Action {
  readonly type: ShoppingActionType.LOAD_SHOPPING;
}

/**
 * Load Shopping from database success
 */
export class LoadShoppingSuccessAction implements Action {
  readonly type: ShoppingActionType.LOAD_SHOPPING_SUCCESS;

  /**
   * If Loading Success send fetched list to store
   * @param payload [ List of Shopping ]
   */
  constructor(public payload: Array<IShoppingModel>) {
  }
}

/**
 * Load Shopping from database failure
 */
export class LoadShoppingFailureAction implements Action {
  readonly type: ShoppingActionType.LOAD_SHOPPING_FAILURE;

  /**
   * If fetching error during shopping
   * @param payload [ Object of Error]
   */
  constructor(public payload: Error) {
  }
}

/**
 * Add item to shopping
 */
export class AddItemAction implements Action {
  readonly type = ShoppingActionType.ADD_ITEM;

  /**
   * If Add Success send fetched response to store
   * @param payload [ Success Response ]
   */
  constructor(public payload: IShoppingModel) {
  }
}

/**
 * Add item to shopping success
 */
export class AddItemSuccessAction implements Action {
  readonly type: ShoppingActionType.ADD_ITEM_SUCCESS;

  constructor(public payload: IShoppingModel) {
  }
}

/**
 * Add item to shopping Failure
 */
export class AddItemFailureAction implements Action {
  readonly type: ShoppingActionType.ADD_ITEM_FAILURE;

  /**
   *
   * @param payload [ Error Response]
   */
  constructor(public payload: Error) {
  }

}

/**
 * Delete item from Shopping
 */
export class DeleteItemAction implements Action {
  readonly type = ShoppingActionType.DELETE_ITEM;

  /**
   * Can pass id as number or string
   * @param payload [ Deleted Item Id]
   */
  constructor(public payload: number) {
  }
}

/**
 * Delete item from shopping success
 */
export class DeleteItemSuccessAction implements Action {
  readonly type: ShoppingActionType.DELETE_ITEM_SUCCESS;

  constructor(public payload: number) {
  }
}

// /**
//  * Delete item from shopping failure
//  */
// export class DeleteItemFailureAction implements Action {
//   readonly type = ShoppingActionType.DELETE_ITEM_FAILURE;
//
//   constructor(public payload: Error) {
//   }
// }


/**
 * Add item to shopping Failure
 */
export class DeleteItemFailureAction implements Action {
  readonly type: ShoppingActionType.DELETE_ITEM_FAILURE;

  /**
   *
   * @param payload [ Error Response]
   */
  constructor(public payload: Error) {
  }

}

/**
 * Export All Shopping Actions
 */
export type ShoppingAction =
  LoadShoppingAction | LoadShoppingSuccessAction | LoadShoppingFailureAction |
  AddItemAction | AddItemSuccessAction | AddItemFailureAction |
  DeleteItemAction | DeleteItemSuccessAction | DeleteItemFailureAction;
