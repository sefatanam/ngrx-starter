import {IShoppingModel} from '../models/interfaces/IShopping.model';

export interface AppState {
  readonly shopping: Array<IShoppingModel>;
}
