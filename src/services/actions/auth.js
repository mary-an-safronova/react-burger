import { request } from '../../utils/api';
import { setCookie, getCookie, deleteCookie } from '../../utils/cookie';

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';

export const POST_FORGOT_PASSWORD_REQUEST ='POST_FORGOT_PASSWORD_REQUEST';
export const POST_FORGOT_PASSWORD_SUCCESS ='POST_FORGOT_PASSWORD_SUCCESS';
export const POST_FORGOT_PASSWORD_FAILED ='POST_FORGOT_PASSWORD_FAILED';

export const POST_RESET_PASSWORD_REQUEST ='POST_RESET_PASSWORD_REQUEST';
export const POST_RESET_PASSWORD_SUCCESS ='POST_RESET_PASSWORD_SUCCESS';
export const POST_RESET_PASSWORD_FAILED ='POST_RESET_PASSWORD_FAILED';

export const POST_AUTHORIZATION_REQUEST = 'POST_AUTHORIZATION_REQUEST';
export const POST_AUTHORIZATION_FAILED = 'POST_AUTHORIZATION_FAILED';
export const POST_AUTHORIZATION_SUCCESS = 'POST_AUTHORIZATION_SUCCESS';

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

export const postRegister = (email, password, name) => {
  return function(dispatch) {
    dispatch({
      type: POST_REGISTER_REQUEST
    })
    request('/auth/register', 'POST', '', JSON.stringify({ email: email, password: password, name: name }))
    .then((data) => {
      if (data.success) {
        dispatch({ type: POST_REGISTER_SUCCESS, payload: data })
        dispatch(postAuthorization(email, password))
      } 
    })
    .catch(error => {
      dispatch({ type: POST_REGISTER_FAILED, payload: error });
    });
  }
}

export const postForgotPassword = (email) => {
  return function(dispatch) {
    dispatch({
      type: POST_FORGOT_PASSWORD_REQUEST
    })
    request('/password-reset', 'POST', '', JSON.stringify({ email: email }))
    .then((data) => {
        if (data.success) {
          dispatch({ type: POST_FORGOT_PASSWORD_SUCCESS, payload: data })
        }
    })
    .catch(error => {
      dispatch({ type: POST_FORGOT_PASSWORD_FAILED, payload: error });
    });
  }
}

export const postResetPassword = (password, token) => {
  return function(dispatch) {
    dispatch({
      type: POST_RESET_PASSWORD_REQUEST
    })
    request('/password-reset/reset', 'POST', '', JSON.stringify({ password: password, token: token }))
    .then((data) => {
        if (data.success) {
          dispatch({ type: POST_RESET_PASSWORD_SUCCESS, payload: data })
        }
    })
    .catch(error => {
      dispatch({ type: POST_RESET_PASSWORD_FAILED, payload: error });
    });
  }
}

export const postAuthorization = (email, password) => {
  return function(dispatch) {
    dispatch({
      type: POST_AUTHORIZATION_REQUEST
    })
    request('/auth/login', 'POST', '', JSON.stringify({ email: email, password: password }))
    .then((data) => {
      if (data.success) {
        setCookie('accessToken', data.accessToken.split('Bearer ')[1], { path: '/' });
        setCookie('refreshToken', data.refreshToken, { path: '/' });
        dispatch({ type: POST_AUTHORIZATION_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      dispatch({ type: POST_AUTHORIZATION_FAILED, payload: error });
    });
  }
}

export const getUser = () => {
  return function(dispatch) {
    dispatch({ type: GET_USER_REQUEST })
    request('/auth/user', 'GET', 'Bearer ' + getCookie('accessToken'), null)
    .then((data) => {
      if (data.success) {
        dispatch({ type: GET_USER_SUCCESS, payload: data })
      }
    })
    .catch((error) => {
      if (error.message === "jwt expired" || "jwt malformed") {
        dispatch({ type: POST_REFRESH_TOKEN_REQUEST })
        request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
          .then((data) => {
            if (data.success) {
              setCookie("accessToken", data.accessToken.split('Bearer ')[1], { path: '/' });
              setCookie("refreshToken", data.refreshToken, { path: '/' });
              dispatch({ type: POST_REFRESH_TOKEN_SUCCESS, payload: data })
            }
          })
          .then(() => dispatch(getUser()))
          .catch(error => {
            dispatch({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
            return Promise.reject(error);
          })
      }
      dispatch({ type: GET_USER_FAILED, payload: error });
    });
  }
}

export const updateUser = (name, email, password) => {
  return function(dispatch) {
    dispatch({ type: UPDATE_USER_REQUEST })
    request('/auth/user', 'PATCH', 'Bearer ' + getCookie('accessToken'), JSON.stringify({ name: name, email: email, password: password }))
    .then((data) => {
      if (data.success) {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      if (error.message === "jwt expired" || "jwt malformed") {
        dispatch({ type: POST_REFRESH_TOKEN_REQUEST })
        request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
          .then((data) => {
            if (data.success) {
              setCookie("accessToken", data.accessToken.split('Bearer ')[1], { path: '/' });
              setCookie("refreshToken", data.refreshToken, { path: '/' });
              dispatch({ type: POST_REFRESH_TOKEN_SUCCESS, payload: data })
            }
          })
          .then(() => dispatch(updateUser(name, email, password)))
          .catch(error => {
            dispatch({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
            return Promise.reject(error);
          })
      }
      dispatch({ type: UPDATE_USER_FAILED, payload: error });
    });
  }
}

export const logoutUser = () => {
  return function(dispatch) {
    dispatch({ type: POST_LOGOUT_USER_REQUEST })
    request('/auth/logout', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
    .then((data) => {
      if (data.success) {
        console.log(data.success)
        deleteCookie("accessToken", { path: '/' });
        deleteCookie("refreshToken", { path: '/' });
        dispatch({ type: POST_LOGOUT_USER_SUCCESS, payload: data.success })
      }
    })
    .catch(error => {
      dispatch({ type: POST_LOGOUT_USER_FAILED, payload: error });
    });
  }
}