import { WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
  WS_AUTH_SEND_MESSAGE } from "../action-types/ws-auth-action-types";

// Типизация экшенов
export interface IWsAuthConnectionStartAction {
  readonly type: typeof WS_AUTH_CONNECTION_START;
  readonly payload: string;
}
export interface IWsAuthConnectionSuccessAction {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}
export interface IWsAuthConnectionErrorAction {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
}
export interface IWsAuthConnectionClosedAction {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}
export interface IWsAuthGetMessageAction {
  readonly type: typeof WS_AUTH_GET_MESSAGE;
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
export const wsAuthConnectionClosedAction = (): IWsAuthConnectionClosedAction => ({ type: WS_AUTH_CONNECTION_CLOSED });

export const wsAuthActions = {
    wsStart: WS_AUTH_CONNECTION_START,
    onOpen: WS_AUTH_CONNECTION_SUCCESS,
    onError: WS_AUTH_CONNECTION_ERROR,
    onClose: WS_AUTH_CONNECTION_CLOSED,
    onMessage: WS_AUTH_GET_MESSAGE,
    wsSend: WS_AUTH_SEND_MESSAGE
  }