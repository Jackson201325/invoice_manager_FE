import actionTypes from './actionTypes';

export interface IAuthenticationState {
  isLoggedIn: boolean;
  errorMessage: '';
  isLoading: boolean;
}
const STORAGE_TOKEN_NAME = 'Authorization';

export const initialState = {
  isLoggedIn: localStorage.getItem(STORAGE_TOKEN_NAME) ? true : false,
  errorMessage: ''
};

const clearStorageAndState = (newState, error = 'Unexpected Error') => {
  console.log(STORAGE_TOKEN_NAME);
  localStorage.removeItem(STORAGE_TOKEN_NAME);
  console.log(localStorage.getItem(STORAGE_TOKEN_NAME));
  newState.errorMessage = error;
  newState.isLoggedIn = false;
};

export default function authReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload);
      newState.isLoggedIn = true;

      break;

    case actionTypes.LOGIN_FAIL:
      clearStorageAndState(newState, action.payload);
      break;

    case actionTypes.LOGOUT_SUCCESS:
      clearStorageAndState(newState, action.payload);
      break;

    case actionTypes.CREATE_USER_SUCCESS:
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload);
      newState.isLoggedIn = true;
      break;

    case actionTypes.CREATE_USER_FAIL:
      clearStorageAndState(newState, action.payload);
      break;
  }
  return newState;
}
