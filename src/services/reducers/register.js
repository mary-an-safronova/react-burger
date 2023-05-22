import { POST_REGISTER_REQUEST,
    POST_REGISTER_FAILED,
    POST_REGISTER_SUCCESS } from "../actions/register";

const initialState = {
    registerRequest: false,
    registerFailed: false,
    user: {}
    };

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerFailed: false,
            }
        }
        case POST_REGISTER_SUCCESS: {
            return { 
                ...state, 
                user: action.payload.user,
                registerRequest: false,
            }
        }
        case POST_REGISTER_FAILED: {
            return { 
                ...state, 
                registerFailed: true, 
                registerRequest: false 
            }
        }
        default: {
            return state;
        }
    }
}