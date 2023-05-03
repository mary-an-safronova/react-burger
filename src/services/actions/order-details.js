import { request } from "../../utils/api";

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';

export const CLOSE_ORDER_DETAILS_MODAL = 'CLOSE_ORDER_DETAILS_MODAL';

export const closeOrderDetailsModal = () => ({ type: CLOSE_ORDER_DETAILS_MODAL })

export const postOrder = (ingredients) => {
  return function(dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST
    })
    request('/orders', 'POST', JSON.stringify({ ingredients: ingredients}))
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
      dispatch({ type: POST_ORDER_FAILED, payload: error });
    });
  }
}