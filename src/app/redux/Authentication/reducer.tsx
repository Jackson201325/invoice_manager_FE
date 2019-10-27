import actionTypes from './actionTypes';
import initializeAxios from '../../api/axiosConfig';

export type IAuthenticationState = {
  currentUserLogged: object;
  currentEnvironment: string;
  isAuthenticationLoaded: boolean;
  isLoggedIn: boolean;
};

export const initialState = {
  currentUserLogged: undefined,
  currentEnvironment: '',
  isAuthenticationLoaded: false,
  isLoggedIn: false
};

const STORAGE_TOKEN_NAME = 'token';
const STORAGE_CURRENT_USER_NAME = 'current-user-logged';
const STORAGE_BASE_URL_NAME = 'base-url';

const clearStorageAndState = newState => {
  localStorage.removeItem(STORAGE_TOKEN_NAME);
  localStorage.removeItem(STORAGE_CURRENT_USER_NAME);
  localStorage.removeItem(STORAGE_BASE_URL_NAME);
  newState.currentUserLogged = undefined;
  newState.isLoggedIn = false;
};

export default function authentication(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.LOAD_AUTH:
      const token = localStorage.getItem(STORAGE_TOKEN_NAME);
      const baseURL = localStorage.getItem(STORAGE_BASE_URL_NAME);
      let currentUserLogged = localStorage.getItem(STORAGE_CURRENT_USER_NAME);
      currentUserLogged = currentUserLogged && JSON.parse(currentUserLogged);

      newState.currentUserLogged = currentUserLogged;
      newState.currentEnvironment = baseURL;
      newState.token = token;
      newState.isAuthenticationLoaded = true;
      newState.isLoggedIn = !!(currentUserLogged && token && baseURL);
      initializeAxios();
      break;

    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem(STORAGE_TOKEN_NAME, action.payload.authToken);
      localStorage.setItem(
        STORAGE_CURRENT_USER_NAME,
        JSON.stringify(action.payload)
      );
      localStorage.setItem(STORAGE_BASE_URL_NAME, action.payload.baseURL);

      newState.token = action.payload.authToken;
      newState.currentEnvironment = action.payload.baseURL;
      newState.currentUserLogged = action.payload;
      newState.isLoggedIn = !!(
        newState.currentUserLogged &&
        newState.token &&
        newState.currentEnvironment
      );
      initializeAxios();
      break;

    case actionTypes.LOGIN_FAIL:
      clearStorageAndState(newState);
      initializeAxios();
      break;

    case actionTypes.LOGOUT_SUCCESS:
      clearStorageAndState(newState);
      initializeAxios();
      break;
  }
  return newState;
}
