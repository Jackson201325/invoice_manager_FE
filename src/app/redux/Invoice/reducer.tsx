import actionTypes from './actionTypes';
import { IItem, IInvoice, invoiceRecord, itemRecord } from '../../models';

import { List } from 'immutable';

export interface IInvoiceState {
  isLoading: boolean;
  invoices: List<IInvoice>;
  errorMessage: string;
  invoice?: object;
  items?: List<IItem>;
}

export const initialState: IInvoiceState = {
  isLoading: false,
  invoices: List(),
  errorMessage: '',
  invoice: {},
  items: List()
};

export default function invoiceReducer(
  state: IInvoiceState = initialState,
  action
) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.CREATE_INVOICE_START:
      newState.isLoading = true;
      break;

    case actionTypes.CREATE_INVOICE_SUCCESS:
      newState.isLoading = false;
      console.log(action.payload);
      // newState.invoices = List(
      //   action.payload.map(element => invoiceRecord(element))
      // );
      break;

    case actionTypes.CREATE_INVOICE_FAIL:
      newState.isLoading = false;
      break;

    case actionTypes.GET_INVOICES_START:
      newState.isLoading = true;
      break;

    case actionTypes.GET_INVOICES_SUCCESS:
      newState.isLoading = false;
      newState.invoices = List(
        action.payload.map(element => {
          // console.log(element.created_at);
          const date = new Date(element.created_at);
          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          };
          element.created_at = date.toLocaleDateString('en-US', options);
          // console.log(element);
          return invoiceRecord(element);
        })
      );
      break;

    case actionTypes.GET_INVOICES_FAIL:
      newState.isLoading = false;
      newState.errorMessage = action.payload;
      break;

    case actionTypes.GET_INVOICE_START:
      newState.isLoading = true;
      break;

    case actionTypes.GET_INVOICE_SUCCESS:
      newState.isLoading = false;
      const date = new Date(action.payload.created_at);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };
      action.payload.created_at = date.toLocaleDateString('en-US', options);
      newState.invoice = invoiceRecord(action.payload);
      break;

    case actionTypes.GET_INVOICE_FAIL:
      newState.isLoading = false;
      newState.errorMessage = action.payload;
      break;

    case actionTypes.GET_ITEMS_START:
      newState.isLoading = true;
      break;

    case actionTypes.GET_ITEMS_SUCCESS:
      newState.isLoading = false;
      newState.items = List(action.payload.map(element => itemRecord(element)));
      break;

    case actionTypes.GET_ITEMS_FAIL:
      newState.isLoading = false;
      newState.errorMessage = action.payload;
      break;
  }
  return newState;
}
