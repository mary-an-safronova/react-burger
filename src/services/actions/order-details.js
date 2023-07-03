import { request } from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { POST_REFRESH_TOKEN_FAILED, POST_REFRESH_TOKEN_REQUEST, POST_REFRESH_TOKEN_SUCCESS } from "../action-types/auth-action-types";
import { POST_ORDER_REQUEST, POST_ORDER_FAILED, POST_ORDER_SUCCESS, CLOSE_ORDER_DETAILS_MODAL } from "../action-types/order-details-action-types";

export const closeOrderDetailsModal = () => ({ type: CLOSE_ORDER_DETAILS_MODAL })

export const postOrder = (ingredients) => {
  return function(dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST
    })
    request('/orders', 'POST', 'Bearer ' + getCookie('accessToken'), JSON.stringify({ ingredients: ingredients}))
    .then(({ success, order: { number } }) => {
      if (success) {
        dispatch({ type: POST_ORDER_SUCCESS, payload: number })
      } else {
        dispatch({
          type: POST_ORDER_FAILED
        });
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
          .then(() => dispatch(postOrder(ingredients)))
          .catch(error => {
            dispatch({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
            return Promise.reject(error);
          })
      }
      dispatch({ type: POST_ORDER_FAILED, payload: error });
    });
  }
}