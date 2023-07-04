import { request } from '../../utils/api';
import { setCookie, getCookie, deleteCookie } from '../../utils/cookie';

import { POST_REGISTER_REQUEST,
  POST_REGISTER_FAILED,
  POST_REGISTER_SUCCESS,
  POST_FORGOT_PASSWORD_REQUEST,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
  POST_RESET_PASSWORD_REQUEST,
  POST_RESET_PASSWORD_SUCCESS,
  POST_RESET_PASSWORD_FAILED,
  POST_AUTHORIZATION_REQUEST,
  POST_AUTHORIZATION_FAILED,
  POST_AUTHORIZATION_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  POST_REFRESH_TOKEN_REQUEST,
  POST_REFRESH_TOKEN_SUCCESS,
  POST_REFRESH_TOKEN_FAILED,
  POST_LOGOUT_USER_REQUEST,
  POST_LOGOUT_USER_SUCCESS,
  POST_LOGOUT_USER_FAILED } from '../action-types/auth-action-types';

import { IPostRegisterRequestAction,
  IPostRegisterFailedAction,
  IPostRegisterSuccessAction,
  
  IPostForgotPasswordRequestAction,
  IPostForgotPasswordFailedAction,
  IPostForgotPasswordSuccessAction,
  
  IPostResetPasswordRequestAction,
  IPostResetPasswordFailedAction,
  IPostResetPasswordSuccessAction,
  
  IPostAuthorizationRequestAction,
  IPostAuthorizationFailedAction,
  IPostAuthorizationSuccessAction,
  
  IGetUserRequestAction,
  IGetUserFailedAction,
  IGetUserSuccessAction,
  
  IUpdateUserRequestAction,
  IUpdateUserFailedAction,
  IUpdateUserSuccessAction,
  
  IPostRefreshTokenRequestAction,
  IPostRefreshTokenFailedAction,
  IPostRefreshTokenSuccessAction,
  
  IPostLogoutUserRequestAction,
  IPostLogoutUserFailedAction,
  IPostLogoutUserSuccessAction,
} from '../interfaces/auth-action-interfaces';

import { AppDispatch, AppThunk } from '../types/index';
import { TServerMessage, TTokens } from '../types/data';

export const postRegisterRequestAction = (): IPostRegisterRequestAction => ({ type: POST_REGISTER_REQUEST });
export const postRegisterFailedAction = (error: Readonly<TServerMessage>): IPostRegisterFailedAction => ({ type: POST_REGISTER_FAILED, payload: error });
export const postRegisterSuccessAction = (data: { readonly email: string; readonly name: string; } ): IPostRegisterSuccessAction => ({ type: POST_REGISTER_SUCCESS, user: data });

export const postForgotPasswordRequestAction = (): IPostForgotPasswordRequestAction => ({ type: POST_FORGOT_PASSWORD_REQUEST });
export const postForgotPasswordFailedAction = (error: Readonly<TServerMessage>): IPostForgotPasswordFailedAction => ({ type: POST_FORGOT_PASSWORD_FAILED, payload: error });
export const postForgotPasswordSuccessAction = (data: Readonly<TServerMessage> & { readonly email: string }): IPostForgotPasswordSuccessAction => ({ type: POST_FORGOT_PASSWORD_SUCCESS, payload: data });

export const postResetPasswordRequestAction = (): IPostResetPasswordRequestAction => ({ type: POST_RESET_PASSWORD_REQUEST });
export const postResetPasswordFailedAction = (error: Readonly<TServerMessage>): IPostResetPasswordFailedAction => ({ type: POST_RESET_PASSWORD_FAILED, payload: error });
export const postResetPasswordSuccessAction = (data: Readonly<TServerMessage> & { readonly password: string; readonly token: string }): IPostResetPasswordSuccessAction => ({ type: POST_RESET_PASSWORD_SUCCESS, payload: data });

export const postAuthorizationRequestAction = (): IPostAuthorizationRequestAction => ({ type: POST_AUTHORIZATION_REQUEST });
export const postAuthorizationFailedAction = (error: Readonly<TServerMessage>): IPostAuthorizationFailedAction => ({ type: POST_AUTHORIZATION_FAILED, payload: error });
export const postAuthorizationSuccessAction = (data: Readonly<TTokens> & { readonly user: { readonly email: string; readonly name: string; }}): IPostAuthorizationSuccessAction => ({ type: POST_AUTHORIZATION_SUCCESS, payload: data });

export const getUserRequestAction = (): IGetUserRequestAction => ({ type: GET_USER_REQUEST });
export const getUserFailedAction = (error: Readonly<TServerMessage>): IGetUserFailedAction => ({ type: GET_USER_FAILED, payload: error });
export const getUserSuccessAction = (data: { readonly success: boolean; } & { readonly user: { readonly email: string; readonly name: string; } }): IGetUserSuccessAction => ({ type: GET_USER_SUCCESS, payload: data });

export const updateUserRequestAction = (): IUpdateUserRequestAction => ({ type: UPDATE_USER_REQUEST });
export const updateUserFailedAction = (error: Readonly<TServerMessage>): IUpdateUserFailedAction => ({ type: UPDATE_USER_FAILED, payload: error });
export const updateUserSuccessAction = (data: { readonly success: boolean; } & { readonly user: { readonly email: string; readonly name: string; } }): IUpdateUserSuccessAction => ({ type: UPDATE_USER_SUCCESS, payload: data });

export const postRefreshTokenRequestAction = (): IPostRefreshTokenRequestAction => ({ type: POST_REFRESH_TOKEN_REQUEST });
export const postRefreshTokenFailedAction = (error: Readonly<TServerMessage>): IPostRefreshTokenFailedAction => ({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
export const postRefreshTokenSuccessAction = (data: Readonly<TTokens>): IPostRefreshTokenSuccessAction => ({ type: POST_REFRESH_TOKEN_SUCCESS, payload: data });

export const postLogoutUserRequestAction = (): IPostLogoutUserRequestAction => ({ type: POST_LOGOUT_USER_REQUEST });
export const postLogoutUserFailedAction = (error: Readonly<TServerMessage>): IPostLogoutUserFailedAction => ({ type: POST_LOGOUT_USER_FAILED, payload: error });
export const postLogoutUserSuccessAction = (data: Readonly<TServerMessage>): IPostLogoutUserSuccessAction => ({ type: POST_LOGOUT_USER_SUCCESS, payload: data });

export const postRegister: AppThunk = (email: string, password: string, name: string) => {
  return function(dispatch) {
    dispatch(postRegisterRequestAction())
    request('/auth/register', 'POST', '', JSON.stringify({ email: email, password: password, name: name }))
    .then((data) => {
      if (data.success) {
        dispatch(postRegisterSuccessAction(data))
        dispatch(postAuthorization(email, password))
      } 
    })
    .catch(error => {
      dispatch(postRegisterFailedAction(error));
    });
  }
}

export const postForgotPassword: AppThunk = (email: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(postForgotPasswordRequestAction())
    request('/password-reset', 'POST', '', JSON.stringify({ email: email }))
    .then((data) => {
        if (data.success) {
          dispatch(postForgotPasswordSuccessAction(data))
        }
    })
    .catch(error => {
      dispatch(postForgotPasswordFailedAction(error));
    });
  }
}

export const postResetPassword: AppThunk = (password: string, token: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(postResetPasswordRequestAction())
    request('/password-reset/reset', 'POST', '', JSON.stringify({ password: password, token: token }))
    .then((data) => {
        if (data.success) {
          dispatch(postResetPasswordSuccessAction(data))
        }
    })
    .catch(error => {
      dispatch(postResetPasswordFailedAction(error));
    });
  }
}

export const postAuthorization: AppThunk = (email: string, password: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(postAuthorizationRequestAction())
    request('/auth/login', 'POST', '', JSON.stringify({ email: email, password: password }))
    .then((data) => {
      if (data.success) {
        setCookie('accessToken', data.accessToken.split('Bearer ')[1], { path: '/' });
        setCookie('refreshToken', data.refreshToken, { path: '/' });
        dispatch(postAuthorizationSuccessAction(data))
      } 
    })
    .catch(error => {
      dispatch(postAuthorizationFailedAction(error));
    });
  }
}

export const getUser: AppThunk = () => {
  return function(dispatch) {
    dispatch(getUserRequestAction())
    request('/auth/user', 'GET', 'Bearer ' + getCookie('accessToken'), null)
    .then((data) => {
      if (data.success) {
        dispatch(getUserSuccessAction(data))
      }
    })
    .catch((error) => {
      if (error.message === "jwt expired" || "jwt malformed") {
        dispatch(postRefreshTokenRequestAction())
        request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
          .then((data) => {
            if (data.success) {
              setCookie("accessToken", data.accessToken.split('Bearer ')[1], { path: '/' });
              setCookie("refreshToken", data.refreshToken, { path: '/' });
              dispatch(postRefreshTokenSuccessAction(data))
            }
          })
          .then(() => dispatch(getUser()))
          .catch(error => {
            dispatch(postRefreshTokenFailedAction(error));
            return Promise.reject(error);
          })
      }
      dispatch(getUserFailedAction(error));
    });
  }
}

export const updateUser: AppThunk = (name: string, email: string, password: string) => {
  return function(dispatch) {
    dispatch(updateUserRequestAction())
    request('/auth/user', 'PATCH', 'Bearer ' + getCookie('accessToken'), JSON.stringify({ name: name, email: email, password: password }))
    .then((data) => {
      if (data.success) {
        dispatch(updateUserSuccessAction(data))
      } 
    })
    .catch(error => {
      if (error.message === "jwt expired" || "jwt malformed") {
        dispatch(postRefreshTokenRequestAction())
        request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
          .then((data) => {
            if (data.success) {
              setCookie("accessToken", data.accessToken.split('Bearer ')[1], { path: '/' });
              setCookie("refreshToken", data.refreshToken, { path: '/' });
              dispatch(postRefreshTokenSuccessAction(data))
            }
          })
          .then(() => dispatch(updateUser(name, email, password)))
          .catch(error => {
            dispatch(postRefreshTokenFailedAction(error));
            return Promise.reject(error);
          })
      }
      dispatch(updateUserFailedAction(error));
    });
  }
}

export const logoutUser: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(postLogoutUserRequestAction())
    request('/auth/logout', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
    .then((data) => {
      if (data.success) {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        dispatch(postLogoutUserSuccessAction(data.success))
      }
    })
    .catch(error => {
      dispatch(postLogoutUserFailedAction(error));
    });
  }
}