import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../api/loginApi';
/**
 * End user session, remove data from localStorage
 */

export const logout = () => dispatch =>
  dispatch({ type: actionTypes.LOGOUT_SUCCESS });

export const login = credential => dispatch =>
  new Promise((resolve, reject) => {
    const baseURL = `http://localhost:3000`;
    axios
      .post(`${baseURL}${urlResolver.LOGIN}`, credential)
      .then(response => {
        const payload = response.data.auth_token;
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload });
        resolve('ok');
      })
      .catch(error => {
        console.info(error);
        const payload = error.message;
        dispatch({ type: actionTypes.LOGIN_FAIL, payload });
        reject(error);
      });
  });
