export const socketMiddleware = (wsUrl, wsActions) => {
    return store => {
        let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onError, onClose, onMessage, wsSend } = wsActions;
 
      if (type === wsStart) {
        socket = new WebSocket(wsUrl);
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
        dispatch({ type: onMessage, payload: JSON.parse(data) });
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