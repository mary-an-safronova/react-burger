import { POST_AUTHORIZATION_REQUEST,
    POST_AUTHORIZATION_FAILED,
    POST_AUTHORIZATION_SUCCESS } from "../actions/login";

const initialState = {
    authorizationRequest: false,
    authorizationFailed: false,
    user: {}
    };

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUTHORIZATION_REQUEST: {
            return {
                ...state,
                authorizationRequest: true,
                authorizationFailed: false,
            }
        }
        case POST_AUTHORIZATION_SUCCESS: {
            return { 
                ...state, 
                user: action.payload.user,
                authorizationRequest: false,
            }
        }
        case POST_AUTHORIZATION_FAILED: {
            return { 
                ...state, 
                authorizationFailed: true, 
                authorizationRequest: false 
            }
        }
        default: {
            return state;
        }
    }
}