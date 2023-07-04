import { request } from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { postRefreshTokenFailedAction, postRefreshTokenRequestAction, postRefreshTokenSuccessAction } from "../actions/auth";
import { POST_ORDER_REQUEST, POST_ORDER_FAILED, POST_ORDER_SUCCESS, CLOSE_ORDER_DETAILS_MODAL } from "../action-types/order-details-action-types";
import { AppThunk, AppDispatch } from "../types";

// Типизация экшенов
export interface IPostOrderRequestAction {
  readonly type: typeof POST_ORDER_REQUEST;
}
export interface IPostOrderFailedAction {
  readonly type: typeof POST_ORDER_FAILED;
}
export interface IPostOrderSuccessAction {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly payload: number;
}
export interface ICloseOrderDetailsModalAction {
  readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

// Объединяем в Union
export type TOrderDetailsActions =
| IPostOrderRequestAction
| IPostOrderFailedAction
| IPostOrderSuccessAction
| ICloseOrderDetailsModalAction;

export const postOrderRequestAction = (): IPostOrderRequestAction => ({ type: POST_ORDER_REQUEST });
export const postOrderFailedAction = (): IPostOrderFailedAction => ({ type: POST_ORDER_FAILED });
export const postOrderSuccessAction = (number: number): IPostOrderSuccessAction => ({ type: POST_ORDER_SUCCESS, payload: number });

export const closeOrderDetailsModal = (): ICloseOrderDetailsModalAction => ({ type: CLOSE_ORDER_DETAILS_MODAL });


export const postOrder: AppThunk = (ingredients: ReadonlyArray<string>) => {
  return function(dispatch: AppDispatch) {
    dispatch(postOrderRequestAction())
    request('/orders', 'POST', 'Bearer ' + getCookie('accessToken'), JSON.stringify({ ingredients: ingredients}))
    .then(({ success, order: { number } }) => {
      if (success) {
        dispatch(postOrderSuccessAction(number))
      } else {
        dispatch(postOrderFailedAction());
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
          .then(() => dispatch(postOrder(ingredients)))
          .catch(error => {
            dispatch(postRefreshTokenFailedAction(error));
            return Promise.reject(error);
          })
      }
      dispatch(postOrderFailedAction());
    });
  }
}