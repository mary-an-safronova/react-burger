import { WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE } from "../action-types/ws-action-types";
  import { TOrder } from "../types/data";

export interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
  }
  export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: string | undefined;
  }
  export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: string | undefined;
  }
  export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
  }
  export interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: { 
      readonly error: string | undefined;
      readonly orders: ReadonlyArray<TOrder>;
      readonly total: number;
      readonly totalToday: number;
    }
  }
  export interface IWsSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE;
  }