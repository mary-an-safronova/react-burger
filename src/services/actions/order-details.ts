import { request } from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { postRefreshTokenFailedAction, postRefreshTokenRequestAction, postRefreshTokenSuccessAction } from "../actions/auth";
import { POST_ORDER_REQUEST, POST_ORDER_FAILED, POST_ORDER_SUCCESS, CLOSE_ORDER_DETAILS_MODAL } from "../action-types/order-details-action-types";
import { AppThunk } from "../types";
import { IPostOrderRequestAction,
  IPostOrderFailedAction,
  IPostOrderSuccessAction,
  ICloseOrderDetailsModalAction
} from '../interfaces/order-details-interfaces';

export const postOrderRequestAction = (): IPostOrderRequestAction => ({ type: POST_ORDER_REQUEST });
export const postOrderFailedAction = (): IPostOrderFailedAction => ({ type: POST_ORDER_FAILED });
export const postOrderSuccessAction = (number: number): IPostOrderSuccessAction => ({ type: POST_ORDER_SUCCESS, payload: number });

export const closeOrderDetailsModal = (): ICloseOrderDetailsModalAction => ({ type: CLOSE_ORDER_DETAILS_MODAL });


export const postOrder: AppThunk = (ingredients: ReadonlyArray<string>) => {
  return function(dispatch) {
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