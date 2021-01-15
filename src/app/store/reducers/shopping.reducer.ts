import {ShoppingAction, ShoppingActionType} from '../actions/shopping.action';
import {ShoppingState} from '../states/app/ShoppingState';


/*
 * initial value of shopping reducer
 */
const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

/**
 * Shopping Reducer
 * @param state
 * @param action
 * @constructor
 */

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction): ShoppingState {
  switch (action.type) {
    case ShoppingActionType.LOAD_SHOPPING:
      return {...state, loading: true};
    case ShoppingActionType.LOAD_SHOPPING_SUCCESS:
      return {...state, list: action.payload, loading: false};
    case ShoppingActionType.LOAD_SHOPPING_FAILURE:
      return {...state, error: action.payload, loading: false};
    case ShoppingActionType.ADD_ITEM:
      return {...state, loading: true};
    case ShoppingActionType.ADD_ITEM_SUCCESS:
      return {...state, list: [...state.list, action.payload], loading: false};
    case ShoppingActionType.ADD_ITEM_FAILURE:
      return {...state, error: action.payload, loading: false};
    case ShoppingActionType.DELETE_ITEM:
      return {...state, loading: true};
    case ShoppingActionType.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ShoppingActionType.DELETE_ITEM_FAILURE:
      return {
        ...state, loading: false, error: action.payload
      };
    default :
      return state;
  }
}
