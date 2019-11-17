import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../apiPath/invoiceApi';
/**
 * End user session, remove data from localStorage
 */

export const createInvoice = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.CREATE_INVOICE_START });
    const baseURL = `http://localhost:3000`;
    console.log('create');
    axios
      .post(`${baseURL}${urlResolver.CREATE}`)
      .then(response => {
        const payload = response;
        console.log(payload);
        dispatch({ type: actionTypes.CREATE_INVOICE_SUCCESS, payload });
        resolve(response.status);
      })
      .catch(error => {
        console.info(error);
        const payload = error.message;
        dispatch({ type: actionTypes.CREATE_INVOICE_FAIL, payload });
        reject(error);
      });
  });

export const getInvoices = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.GET_INVOICES_START });
    const token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    axios
      .get('http://localhost:3000/invoices')
      .then(response => {
        const payload = response.data;
        console.log(response);
        dispatch({ type: actionTypes.GET_INVOICES_SUCCESS, payload });
        resolve(response.data);
      })
      .catch(error => {
        const payload = error.message;
        console.info(error);
        dispatch({ type: actionTypes.GET_INVOICES_FAIL, payload });
        reject(error);
      });
  });

export const getInvoice = id => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.GET_INVOICE_START });
    const token = localStorage.getItem('Authorization');
    const URL = `http://localhost:3000/invoices/${id}`;
    axios.defaults.headers.common['Authorization'] = token;
    axios
      .get(URL)
      .then(response => {
        const payload = response.data;
        console.log(response);
        dispatch({ type: actionTypes.GET_INVOICE_SUCCESS, payload });
        resolve(response.data);
      })
      .catch(error => {
        const payload = error.message;
        console.info(error);
        dispatch({ type: actionTypes.GET_INVOICE_FAIL, payload });
        reject(error);
      });
  });

export const getItems = id => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.GET_ITEMS_START });
    const token = localStorage.getItem('Authorization');
    const URL = `http://localhost:3000/invoices/${id}/items`;
    axios.defaults.headers.common['Authorization'] = token;
    axios
      .get(URL)
      .then(response => {
        const payload = response.data;
        console.log(response);
        dispatch({ type: actionTypes.GET_ITEMS_SUCCESS, payload });
        resolve(response.data);
      })
      .catch(error => {
        const payload = error.message;
        console.info(error);
        dispatch({ type: actionTypes.GET_ITEMS_FAIL, payload });
        reject(error);
      });
  });
