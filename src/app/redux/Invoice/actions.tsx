import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../apiPath/invoiceApi';
/**
 * End user session, remove data from localStorage
 */

export const logout = () => dispatch => {
  console.log('je;;p');
  // dispatch({ type: actionTypes.LOGOUT_SUCCESS });
};
export const createInvoice = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.CREATE_INVOICE_START });
    const baseURL = `http://localhost:3000`;

    axios
      .post(`${baseURL}${urlResolver.CREATE}`)
      .then(response => {
        const payload = response;
        dispatch({ type: actionTypes.CREATE_INVOICE_SUCCESS, payload });
        resolve(response.status);
      })
      .catch(error => {
        console.info(error);
        const payload = error.message;
        dispatch({ type: actionTypes.CREATE_INVOICE__FAIL, payload });
        reject(error);
      });
  });

export const getInvoices = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.GET_INVOICE_START });
    const token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    axios
      .get('http://localhost:3000/invoices')
      .then(response => {
        const payload = response.data;
        console.log(response);
        dispatch({ type: actionTypes.GET_INVOICE_SUCCESS, payload });
        resolve(response.data);
      })
      .catch(error => {
        const payload = error.message;
        console.info(error);
        dispatch({ type: actionTypes.GET_INVOICE__FAIL, payload });
        reject(error);
      });
  });
