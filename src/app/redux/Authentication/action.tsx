import actionTypes from './actionTypes';
import axios from 'axios';

import { urlResolver } from '../../api/loginApi';
/**
 * End user session, remove data from localStorage
 */


export const logout = () => dispatch => {
  console.log('je;;p')
  dispatch({ type: actionTypes.LOGOUT_SUCCESS });
};
export const login = credential => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3000/auth/login`, credential)
      .then(response => {
        const payload = response.data.auth_token;
        console.log(payload)
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
