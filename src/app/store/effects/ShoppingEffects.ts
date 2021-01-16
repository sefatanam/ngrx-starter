import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {of} from 'rxjs';
import {ShoppingService} from '../../services/shopping.service';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes,
} from '../actions/shopping.action';
import {ShoppingItem} from '../models/interfaces/ShoppingItem';

const DATA: ShoppingItem[] = [{
  'id': 0,
  'name': 'Diet Coke'
}];

@Injectable()
export class ShoppingEffects {

  // @Effect() loadShopping$ = this.actions$
  //   .pipe(
  //     ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
  //     mergeMap(
  //       () => this.shoppingService.getShoppingItems()
  //         .pipe(
  //           map(data => {
  //             console.log(data)
  //             return new LoadShoppingSuccessAction(DATA);
  //           }),
  //           catchError(error => of(new LoadShoppingFailureAction(error)))
  //         )
  //     ),
  //   );

  @Effect() addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    );

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {
  }
}
