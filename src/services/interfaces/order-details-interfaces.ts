import { POST_ORDER_REQUEST, POST_ORDER_FAILED, POST_ORDER_SUCCESS, CLOSE_ORDER_DETAILS_MODAL } from "../action-types/order-details-action-types";

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