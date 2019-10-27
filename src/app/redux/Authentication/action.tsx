import actionTypes from './actionTypes';
import axios from 'axios';
import { methodResolver, urlResolver } from '../../api/axiosConfig';
/**
 * End user session, remove data from localStorage
 */
export const logout = () => dispatch => {
  dispatch({ type: actionTypes.LOGOUT_START });

  axios
    .post(urlResolver.LOGOUT, body)
    .finally(dispatch({ type: actionTypes.LOGOUT_SUCCESS }));
};

/**
 * Login user by email and password and add data to localStorage
 * @param {String} email
 * @param {String} password
 * @param {String} environment
 * @param {String} port
 */
export const login = (email, password, environment, port) => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.LOGIN_START });

    const baseURL = `${environment}:${port}`;

    axios
      .post(`${baseURL}${urlResolver.LOGIN}`, body)
      .then(data => {
        const successResult = validateRequest(data.data);
        const payload = { baseURL, ...successResult };
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload });
        resolve('ok');
      })
      .catch(error => {
        console.info(error);
        dispatch({ type: actionTypes.LOGIN_FAIL, payload: error });
        reject(error);
      });
  });
