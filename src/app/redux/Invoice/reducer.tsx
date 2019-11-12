import actionTypes from './actionTypes';
import { IItem, IInvoice, invoiceRecord } from '../../models';

import { List } from 'immutable';

export interface IInvoiceState {
  isLoading: boolean;
  invoices: List<IItem>;
  errorMessage: string;
  invoice?: string;
}

export const initialState: IInvoiceState = {
  isLoading: false,
  invoices: List(),
  errorMessage: ''
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
      newState.invoice = action.payload.id;
      newState.invoices = List(
        action.payload.map(element => invoiceRecord(element))
      );
      break;

    case actionTypes.CREATE_INVOICE__FAIL:
      newState.isLoading = false;
      break;

    case actionTypes.GET_INVOICE_START:
      newState.isLoading = true;
      break;

    case actionTypes.GET_INVOICE_SUCCESS:
      newState.isLoading = false;
      newState.invoices = List(
        action.payload.map(element => {
          // console.log(element.created_at);
          const date = new Date(element.created_at);
          const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          };
          element.created_at = date.toLocaleDateString('en-EN', options);
          // console.log(typeof element);
          // console.log(element);
          invoiceRecord(element);
        })
      );
      break;

    case actionTypes.GET_INVOICE__FAIL:
      newState.isLoading = false;
      newState.errorMessage = action.payload;
      break;
  }
  return newState;
}
