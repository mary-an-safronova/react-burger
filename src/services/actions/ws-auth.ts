import { WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
  WS_AUTH_SEND_MESSAGE } from "../action-types/ws-auth-action-types";
import { TOrder } from "../types/data";

// Типизация экшенов
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

// Объединяем в Union
export type TWsAuthActions =
| IWsAuthConnectionStartAction
| IWsAuthConnectionSuccessAction
| IWsAuthConnectionErrorAction
| IWsAuthConnectionClosedAction
| IWsAuthGetMessageAction
| IWsAuthSendMessageAction;

export const wsAuthConnectionStartAction = (url: string): IWsAuthConnectionStartAction => ({ type: WS_AUTH_CONNECTION_START, payload: url });
export const wsAuthConnectionSuccessAction = (error: string | undefined): IWsAuthConnectionSuccessAction => ({ type: WS_AUTH_CONNECTION_SUCCESS, payload: error })
export const wsAuthConnectionErrorAction = (error: string | undefined): IWsAuthConnectionErrorAction => ({ type: WS_AUTH_CONNECTION_ERROR, payload: error })
export const wsAuthConnectionClosedAction = (error: string | undefined): IWsAuthConnectionClosedAction => ({ type: WS_AUTH_CONNECTION_CLOSED, payload: error });
export const wsAuthGetMessageAction = (data: { readonly error: string | undefined; readonly orders: ReadonlyArray<TOrder>; readonly total: number; readonly totalToday: number; }): IWsAuthGetMessageAction => ({ type: WS_AUTH_GET_MESSAGE, payload: data});
export const wsAuthSendMessageAction = (): IWsAuthSendMessageAction => ({ type: WS_AUTH_SEND_MESSAGE });

export const wsAuthActions = {
  wsStart: WS_AUTH_CONNECTION_START,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onError: WS_AUTH_CONNECTION_ERROR,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onMessage: WS_AUTH_GET_MESSAGE,
  wsSend: WS_AUTH_SEND_MESSAGE
}