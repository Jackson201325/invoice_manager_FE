import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../api/loginApi';
import { validateRequest } from '../../api/utils';
/**
 * End user session, remove data from localStorage
 */

export const loadAuth = () => dispatch => {
  dispatch({ type: actionTypes.LOAD_AUTH });
};

export const logout = () => dispatch =>
  dispatch({ type: actionTypes.LOGOUT_SUCCESS });

/**
 * Login user by email and password as an credential object and add data to localStorage
 * @param {Object} credential
 */
export const login = credential => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .post(`${urlResolver.LOGIN}`, credential)
      .then(data => {
        const successResult = validateRequest(data.data);
        const payload = { ...successResult };
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload });
        resolve('ok');
      })
      .catch(error => {
        console.info(error);
        dispatch({ type: actionTypes.LOGIN_FAIL, payload: error.message });
        reject(error);
      });
  });
