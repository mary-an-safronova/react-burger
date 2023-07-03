import {
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_AUTH_GET_MESSAGE
  } from '../action-types/ws-auth-action-types';
  
  const initialState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
    error: undefined,
  };
  
  export const wsAuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case WS_AUTH_CONNECTION_SUCCESS:
        return {
            ...state,
            error: undefined,
            wsConnected: true,
        };
      case WS_AUTH_CONNECTION_ERROR:
        return {
            ...state,
            error: action.payload,
            wsConnected: false,
        };
      case WS_AUTH_CONNECTION_CLOSED:
        return {
            ...state,
            error: undefined,
            wsConnected: false,
        };
      case WS_AUTH_GET_MESSAGE:
        return {
            ...state,
            error: undefined,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday,
        };
      default:
        return state;
    }
  }; 