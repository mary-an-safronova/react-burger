import { POST_AUTHORIZATION_REQUEST,
    POST_AUTHORIZATION_FAILED,
    POST_AUTHORIZATION_SUCCESS } from "../actions/login";
import { getCookie } from "../../utils/cookie";

const initialState = {
    authorizationRequest: false,
    authorizationFailed: false,
    success: false,
    authorization: getCookie('accessToken') ? true : false,
    accessToken: '',
    refreshToken: '',
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
                success: true,
                authorization: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
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