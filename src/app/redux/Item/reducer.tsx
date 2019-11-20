import actionTypes from './actionTypes';
import { IItem, itemRecord } from '../../models';

import { List } from 'immutable';

export interface IItemState {
  isLoading: boolean;
  items: List<IItem>;
  errorMessage: string;
  item?: object;
}

export const initialState: IItemState = {
  isLoading: false,
  items: List(),
  item: {},
  errorMessage: ''
};

export default function invoiceReducer(
  state: IItemState = initialState,
  action
) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.CREATE_ITEM_START:
      newState.isLoading = true;
      break;

    case actionTypes.CREATE_ITEM_SUCCESS:
      newState.isLoading = false;
      // newState.invoice = action.payload.id;
      newState.items = List(action.payload.map(element => itemRecord(element)));
      break;

    case actionTypes.CREATE_ITEM_FAIL:
      newState.isLoading = false;
      break;

    case actionTypes.GET_ITEM_START:
      newState.isLoading = true;
      break;

    case actionTypes.GET_ITEM_SUCCESS:
      newState.isLoading = false;
      break;

    case actionTypes.GET_ITEM_FAIL:
      newState.isLoading = false;
      newState.errorMessage = action.payload;
      break;
  }
  return newState;
}
