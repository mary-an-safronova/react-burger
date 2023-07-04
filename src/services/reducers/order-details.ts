import { POST_ORDER_REQUEST,
    POST_ORDER_FAILED,
    POST_ORDER_SUCCESS,
    CLOSE_ORDER_DETAILS_MODAL } from "../action-types/order-details-action-types";
import { TOrderDetailsActions } from "../actions/order-details";

type TOrderDetailsInitialState = {
    orderRequest: boolean;
    orderFailed: boolean;
    id: null | number;
    openOrderDetailsModal: boolean;
    isLoading: boolean;
};

const initialState: TOrderDetailsInitialState = {
    orderRequest: false,
    orderFailed: false,
    id: null,
    openOrderDetailsModal: false,
    isLoading: false,
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions): TOrderDetailsInitialState => {
    switch (action.type) {
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
                isLoading: true,
            }
        }
        case POST_ORDER_SUCCESS: {
            return { 
                ...state, 
                id: action.payload, 
                orderRequest: false,
                openOrderDetailsModal: !state.openOrderDetailsModal,
                isLoading: false,
            }
        }
        case POST_ORDER_FAILED: {
            return { 
                ...state, 
                orderFailed: true, 
                orderRequest: false,
            }
        }
        case CLOSE_ORDER_DETAILS_MODAL: {
            return {
              ...state,
              openOrderDetailsModal: false,
              id: null,
            }
          }
        default: {
            return state;
        }
    }
}