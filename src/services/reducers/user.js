import { GET_USER_REQUEST,
    GET_USER_FAILED,
    GET_USER_SUCCESS,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,

    POST_REFRESH_TOKEN_REQUEST,
    POST_REFRESH_TOKEN_SUCCESS,
    POST_REFRESH_TOKEN_FAILED,

    POST_LOGOUT_USER_REQUEST,
    POST_LOGOUT_USER_SUCCESS,
    POST_LOGOUT_USER_FAILED } from "../actions/user";

const initialState = {
    getUserRequest: false,
    getUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,

    refreshTokenRequest: false,
    refreshTokenFailed: false,

    logoutUserRequest: false,
    logoutUserFailed: false,

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
                getUserRequest: true,
                getUserFailed: false,
            }
        }
        case GET_USER_SUCCESS: {
            return { 
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                getUserRequest: false 
            }
        }
        case GET_USER_FAILED: {
            return { 
                ...state, 
                getUserFailed: true, 
                getUserRequest: false 
            }
        }

        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateUserRequest: true,
                updateUserFailed: false,
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
            }
        }
        case UPDATE_USER_FAILED: {
            return { 
                ...state, 
                updateUserFailed: true, 
                updateUserRequest: false 
            }
        }

        case POST_REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenFailed: false,
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
        case POST_REFRESH_TOKEN_FAILED: {
            return { 
                ...state, 
                refreshTokenFailed: true, 
                refreshTokenRequest: false 
            }
        }

        case POST_LOGOUT_USER_REQUEST: {
            return {
                ...state,
                logoutUserRequest: true,
                logoutUserFailed: false,
            }
        }
        case POST_LOGOUT_USER_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
            }
        }
        case POST_LOGOUT_USER_FAILED: {
            return { 
                ...state, 
                logoutUserFailed: true, 
                logoutUserRequest: false 
            }
        }
        default: {
            return state;
        }
    }
}