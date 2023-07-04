import { WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE } from "../action-types/ws-action-types";

// Типизация экшенов
export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}
export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
}
export interface IWsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
}

// Объединяем в Union
export type TWsActions =
| IWsConnectionStartAction
| IWsConnectionSuccessAction
| IWsConnectionErrorAction
| IWsConnectionClosedAction
| IWsGetMessageAction
| IWsSendMessageAction;

export const wsConnectionStartAction = (url: string): IWsConnectionStartAction => ({ type: WS_CONNECTION_START, payload: url });
export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({ type: WS_CONNECTION_CLOSED });

export const wsActions = {
    wsStart: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_MESSAGE,
    wsSend: WS_SEND_MESSAGE
  }