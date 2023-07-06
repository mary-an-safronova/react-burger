import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../action-types/ws-action-types';
import { TWsActions } from '../interfaces/union-interfaces';
import { TOrder } from '../types/data';

type TWsInitialState = {
  wsConnected: boolean;
  orders: ReadonlyArray<TOrder>
  total: number;
  totalToday: number;
  error: string | undefined,
};

const initialState: TWsInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: undefined,
};

export const wsReducer = (state = initialState, action: TWsActions): TWsInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
          ...state,
          error: undefined,
          wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
          ...state,
          error: action.payload,
          wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
          ...state,
          error: undefined,
          wsConnected: false,
      };
    case WS_GET_MESSAGE:
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