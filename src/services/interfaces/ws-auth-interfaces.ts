import { WS_AUTH_CONNECTION_START,
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_AUTH_GET_MESSAGE,
    WS_AUTH_SEND_MESSAGE } from "../action-types/ws-auth-action-types";
  import { TOrder } from "../types/data";

export interface IWsAuthConnectionStartAction {
    readonly type: typeof WS_AUTH_CONNECTION_START;
    readonly payload: string;
  }
  export interface IWsAuthConnectionSuccessAction {
    readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
    readonly payload: string | undefined;
  }
  export interface IWsAuthConnectionErrorAction {
    readonly type: typeof WS_AUTH_CONNECTION_ERROR;
    readonly payload: string | undefined;
  }
  export interface IWsAuthConnectionClosedAction {
    readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
    readonly payload: string | undefined;
  }
  export interface IWsAuthGetMessageAction {
    readonly type: typeof WS_AUTH_GET_MESSAGE;
    readonly payload: { 
      readonly error: string | undefined;
      readonly orders: ReadonlyArray<TOrder>;
      readonly total: number;
      readonly totalToday: number;
    }
  }
  export interface IWsAuthSendMessageAction {
    readonly type: typeof WS_AUTH_SEND_MESSAGE;
  }