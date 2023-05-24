import { request } from '../../utils/api';
import { setCookie, getCookie, deleteCookie } from '../../utils/cookie';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const POST_REFRESH_TOKEN_REQUEST = 'POST_REFRESH_TOKEN_REQUEST';
export const POST_REFRESH_TOKEN_SUCCESS = 'POST_REFRESH_TOKEN_SUCCESS';
export const POST_REFRESH_TOKEN_FAILED = 'POST_REFRESH_TOKEN_FAILED';

export const POST_LOGOUT_USER_REQUEST = 'POST_LOGOUT_USER_REQUEST';
export const POST_LOGOUT_USER_SUCCESS = 'POST_LOGOUT_USER';
export const POST_LOGOUT_USER_FAILED = 'POST_LOGOUT_USER_FAILED';

export const getUser = (authorization) => {
  return function(dispatch) {
    dispatch({ type: GET_USER_REQUEST })
    request('/auth/user', 'GET', authorization, null)
    .then((data) => {
      if (data.success) {
        dispatch({ type: GET_USER_SUCCESS, payload: data })
      }
    })
    .catch((error) => {
      dispatch({ type: GET_USER_FAILED, payload: error });
    });
  }
}

export const updateUser = (authorization, name, email, password) => {
  return function(dispatch) {
    dispatch({ type: UPDATE_USER_REQUEST })
    request('/auth/user', 'PATCH', authorization, JSON.stringify({ name: name, email: email, password: password }))
    .then((data) => {
      if (data.success) {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      dispatch({ type: UPDATE_USER_FAILED, payload: error });
    });
  }
}

export const refreshToken = () => {
  return function(dispatch) {
    dispatch({ type: POST_REFRESH_TOKEN_REQUEST })
    request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
    .then((data) => {
      if (data.success) {
        setCookie("accessToken", data.accessToken.split('Bearer ')[1]);
        setCookie("refreshToken", data.refreshToken);
        dispatch({ type: POST_REFRESH_TOKEN_SUCCESS, payload: data })
      }
    })
    .catch(error => {
      dispatch({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
    });
  }
}

export const logoutUser = () => {
  return function(dispatch) {
    dispatch({ type: POST_LOGOUT_USER_REQUEST })
    request('/auth/logout', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
    .then((data) => {
      if (data.success) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        dispatch({ type: POST_LOGOUT_USER_SUCCESS, payload: data })
      }
    })
    .catch(error => {
      dispatch({ type: POST_LOGOUT_USER_FAILED, payload: error });
    });
  }
}