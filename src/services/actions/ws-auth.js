import { WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
  WS_AUTH_SEND_MESSAGE } from "../action-types/ws-auth-action-types";

export const wsAuthConnectionStart = (url) => ({ type: WS_AUTH_CONNECTION_START, payload: url });
export const wsAuthConnectionClosed = () => ({ type: WS_AUTH_CONNECTION_CLOSED });

export const wsAuthActions = {
    wsStart: WS_AUTH_CONNECTION_START,
    onOpen: WS_AUTH_CONNECTION_SUCCESS,
    onError: WS_AUTH_CONNECTION_ERROR,
    onClose: WS_AUTH_CONNECTION_CLOSED,
    onMessage: WS_AUTH_GET_MESSAGE,
    wsSend: WS_AUTH_SEND_MESSAGE
  }