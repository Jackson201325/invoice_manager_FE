import actionTypes from './actionTypes';
import initializeAxios from '../../api/axiosConfig';

export interface IAuthenticationState {
  isLoggedIn: boolean;
  errorMessage: '';
}

export const initialState = {
  isLoggedIn: false,
  errorMessage: ''
};

const STORAGE_TOKEN_NAME = 'auth_token';
const isLoggedIn = localStorage.getItem(STORAGE_TOKEN_NAME) ? true : false;

const clearStorageAndState = (newState, error = 'Unexpected Error') => {
  localStorage.removeItem(STORAGE_TOKEN_NAME);
  newState.errorMessage = error;
  newState.isLoggedIn = false;
};

export default function authReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.LOAD_AUTH:
      newState.isLoggedIn = isLoggedIn;
      initializeAxios();
      break;

    case actionTypes.LOGIN_SUCCESS:
      console.log(action.payload);
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload.authToken);
      newState.isLoggedIn = isLoggedIn;
      initializeAxios();
      break;

    case actionTypes.LOGIN_FAIL:
      clearStorageAndState(newState, action.payload);
      initializeAxios();
      break;

    case actionTypes.LOGOUT_SUCCESS:
      clearStorageAndState(newState, action.payload);
      initializeAxios();
      break;
  }
  return newState;
}
