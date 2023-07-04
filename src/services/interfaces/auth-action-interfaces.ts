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
import { TServerMessage, TTokens } from '../types/data';

// Типизация экшенов
export interface IPostRegisterRequestAction {
    readonly type: typeof POST_REGISTER_REQUEST;
  }
  export interface IPostRegisterFailedAction {
    readonly type: typeof POST_REGISTER_FAILED;
    readonly payload: Readonly<TServerMessage>
  }
  export interface IPostRegisterSuccessAction {
    readonly type: typeof POST_REGISTER_SUCCESS;
    readonly user: { readonly email: string; readonly name: string; };
  }
  
  export interface IPostForgotPasswordRequestAction {
    readonly type: typeof POST_FORGOT_PASSWORD_REQUEST;
  }
  export interface IPostForgotPasswordFailedAction {
    readonly type: typeof POST_FORGOT_PASSWORD_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IPostForgotPasswordSuccessAction {
    readonly type: typeof POST_FORGOT_PASSWORD_SUCCESS;
    readonly payload: Readonly<TServerMessage> & { readonly email: string };
  }
  
  export interface IPostResetPasswordRequestAction {
    readonly type: typeof POST_RESET_PASSWORD_REQUEST;
  }
  export interface IPostResetPasswordFailedAction {
    readonly type: typeof POST_RESET_PASSWORD_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IPostResetPasswordSuccessAction {
    readonly type: typeof POST_RESET_PASSWORD_SUCCESS;
    readonly payload: Readonly<TServerMessage> & { readonly password: string; readonly token: string };
  }
  
  export interface IPostAuthorizationRequestAction {
    readonly type: typeof POST_AUTHORIZATION_REQUEST;
  }
  export interface IPostAuthorizationFailedAction {
    readonly type: typeof POST_AUTHORIZATION_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IPostAuthorizationSuccessAction {
    readonly type: typeof POST_AUTHORIZATION_SUCCESS;
    readonly payload: Readonly<TTokens> & { readonly user: { readonly email: string; readonly name: string; } };
  }
  
  export interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST;
  }
  export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly payload: { readonly success: boolean; } & { readonly user: { readonly email: string; readonly name: string; } };
  }
  
  export interface IUpdateUserRequestAction {
    readonly type: typeof UPDATE_USER_REQUEST;
  }
  export interface IUpdateUserFailedAction {
    readonly type: typeof UPDATE_USER_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IUpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly payload: { readonly success: boolean; } & { readonly user: { readonly email: string; readonly name: string; } };
  }
  
  export interface IPostRefreshTokenRequestAction {
    readonly type: typeof POST_REFRESH_TOKEN_REQUEST;
  }
  export interface IPostRefreshTokenFailedAction {
    readonly type: typeof POST_REFRESH_TOKEN_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IPostRefreshTokenSuccessAction {
    readonly type: typeof POST_REFRESH_TOKEN_SUCCESS;
    readonly payload: Readonly<TTokens>;
  }
  
  export interface IPostLogoutUserRequestAction {
    readonly type: typeof POST_LOGOUT_USER_REQUEST;
  }
  export interface IPostLogoutUserFailedAction {
    readonly type: typeof POST_LOGOUT_USER_FAILED;
    readonly payload: Readonly<TServerMessage>;
  }
  export interface IPostLogoutUserSuccessAction {
    readonly type: typeof POST_LOGOUT_USER_SUCCESS;
    readonly payload: Readonly<TServerMessage>;
  }