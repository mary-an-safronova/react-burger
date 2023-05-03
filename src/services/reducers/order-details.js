import { POST_ORDER_REQUEST,
    POST_ORDER_FAILED,
    POST_ORDER_SUCCESS,
    CLOSE_ORDER_DETAILS_MODAL } from "../actions/order-details";

const initialState = {
    orderRequest: false,
    orderFailed: false,
    id: null,
    openOrderDetailsModal: false,
    };

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
            }
        }
        case POST_ORDER_SUCCESS: {
            return { 
                ...state, 
                id: action.payload, 
                orderRequest: false,
                openOrderDetailsModal: !state.openOrderDetailsModal,
            }
        }
        case POST_ORDER_FAILED: {
            return { 
                ...state, 
                orderFailed: true, 
                orderRequest: false 
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