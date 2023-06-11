import { request } from "../../utils/api";
import { getCookie, setCookie } from "../../utils/cookie";
import { POST_REFRESH_TOKEN_REQUEST,
POST_REFRESH_TOKEN_SUCCESS,
POST_REFRESH_TOKEN_FAILED } from "../actions/auth";

export const socketMiddleware = (wsActions) => {
    return store => {
        let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onError, onClose, onMessage, wsSend } = wsActions;
 
      if (type === wsStart) {
        socket = new WebSocket(action.payload);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (parsedData.message === 'Invalid or missing token') {
            dispatch({ type: POST_REFRESH_TOKEN_REQUEST })
            request('/auth/token', 'POST', '', JSON.stringify({ token: getCookie("refreshToken") }))
              .then((data) => {
                if (data.success) {
                  setCookie("accessToken", data.accessToken.split('Bearer ')[1], { path: '/' });
                  setCookie("refreshToken", data.refreshToken, { path: '/' });
                  dispatch({ type: POST_REFRESH_TOKEN_SUCCESS, payload: data })
                }
              })
              .then(() => dispatch({ type: onMessage, payload: parsedData }))
              .catch(error => {
                dispatch({ type: POST_REFRESH_TOKEN_FAILED, payload: error });
                return Promise.reject(error);
              })
          } else {
          dispatch({ type: onMessage, payload: parsedData });
          }
        };
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
        if (type === wsSend) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
    };
}; 