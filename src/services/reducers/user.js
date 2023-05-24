import { GET_USER_REQUEST,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    POST_REFRESH_TOKEN_SUCCESS } from "../actions/user";

const initialState = {
    userRequest: false,
    userFailed: false,
    success: false,
    accessToken: '',
    refreshToken: '',
    user: {
        email: '',
        name: ''
    },
    };

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                userRequest: true,
                userFailed: false,
            }
        }
        case GET_USER_SUCCESS: {
            return { 
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                userRequest: false 
            }
        }
        case GET_USER_FAILED: {
            return { 
                ...state, 
                userFailed: true, 
                userRequest: false 
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
            }
        }
        case POST_REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            }
        }
        default: {
            return state;
        }
    }
}