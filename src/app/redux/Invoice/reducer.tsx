import actionTypes from './actionTypes';
import initializeAxios from '../../apiPath/axiosConfig';

export interface IInvoiceState {
  isLoading: boolean;
  invoices: [];
}

export const initialState: IInvoiceState = {
  isLoading: true
};

export default function authReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.CREATE_INVOICE_SUCCESS:
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload);
      newState.isLoggedIn = true;

      break;

    case actionTypes.CREATE_INVOICE__FAIL:
      clearStorageAndState(newState, action.payload);
      initializeAxios();
      break;

    case actionTypes.GET_INVOICE_SUCCESS:
      clearStorageAndState(newState, action.payload);
      initializeAxios();
      break;

    case actionTypes.GET_INVOICE__FAIL:
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload);
      newState.isLoggedIn = true;
      initializeAxios();
      break;
  }
  return newState;
}
