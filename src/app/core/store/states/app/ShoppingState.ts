import {ShoppingItem} from '../../models/interfaces/ShoppingItem';

export interface ShoppingState {
  list: Array<ShoppingItem>;
  loading: boolean;
  error: Error | number;
}
