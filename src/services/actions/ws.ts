import { WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE } from "../action-types/ws-action-types";
import { TOrder } from "../types/data";
import { IWsConnectionStartAction,
  IWsConnectionSuccessAction,
  IWsConnectionErrorAction,
  IWsConnectionClosedAction,
  IWsGetMessageAction,
  IWsSendMessageAction
} from '../interfaces/ws-interfaces';

export const wsConnectionStartAction = (url: string): IWsConnectionStartAction => ({ type: WS_CONNECTION_START, payload: url });
export const wsConnectionSuccessAction = (error: string | undefined): IWsConnectionSuccessAction => ({ type: WS_CONNECTION_SUCCESS, payload: error })
export const wsConnectionErrorAction = (error: string | undefined): IWsConnectionErrorAction => ({ type: WS_CONNECTION_ERROR, payload: error })
export const wsConnectionClosedAction = (error: string | undefined): IWsConnectionClosedAction => ({ type: WS_CONNECTION_CLOSED, payload: error });
export const wsGetMessageAction = (data: { readonly error: string | undefined; readonly orders: ReadonlyArray<TOrder>; readonly total: number; readonly totalToday: number; }): IWsGetMessageAction => ({ type: WS_GET_MESSAGE, payload: data});
export const wsSendMessageAction = (): IWsSendMessageAction => ({ type: WS_SEND_MESSAGE });

export const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE,
  wsSend: WS_SEND_MESSAGE
}