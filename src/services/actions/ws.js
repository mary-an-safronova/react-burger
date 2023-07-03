import { WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE } from "../action-types/ws-action-types";

export const wsConnectionStart = (url) => ({ type: WS_CONNECTION_START, payload: url });
export const wsConnectionClosed = () => ({ type: WS_CONNECTION_CLOSED });

export const wsActions = {
    wsStart: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_MESSAGE,
    wsSend: WS_SEND_MESSAGE
  }