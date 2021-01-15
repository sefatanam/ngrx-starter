import {IShoppingModel} from '../../models/interfaces/IShopping.model';

export interface ShoppingState {
  list: IShoppingModel[];
  loading: boolean;
  error: Error | number;
}
