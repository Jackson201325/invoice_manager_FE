import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../apiPath/itemApi';
/**
 * End user session, remove data from localStorage
 */

export const createItem = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.CREATE_ITEM_START });
    const baseURL = `http://localhost:3000`;
    axios
      .post(`${baseURL}${urlResolver.CREATE}`)
      .then(response => {
        const payload = response;
        console.log(payload);
        dispatch({ type: actionTypes.CREATE_ITEM_SUCCESS, payload });
        resolve(response.status);
      })
      .catch(error => {
        console.info(error);
        const payload = error.message;
        dispatch({ type: actionTypes.CREATE_ITEM_FAIL, payload });
        reject(error);
      });
  });

export const getItem = id => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.GET_ITEMS_START });
    const token = localStorage.getItem('Authorization');
    const URL = `http://localhost:3000/invoices/${id}/items/`;
    axios.defaults.headers.common['Authorization'] = token;
    axios
      .get(URL)
      .then(response => {
        const payload = response.data;
        console.log(response);
        console.log('getITem');
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
