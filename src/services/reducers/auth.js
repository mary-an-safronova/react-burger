import { POST_REGISTER_REQUEST,
    POST_REGISTER_FAILED,
    POST_REGISTER_SUCCESS,

    POST_FORGOT_PASSWORD_REQUEST,
    POST_FORGOT_PASSWORD_SUCCESS,
    POST_FORGOT_PASSWORD_FAILED,

    POST_RESET_PASSWORD_REQUEST,
    POST_RESET_PASSWORD_SUCCESS,
    POST_RESET_PASSWORD_FAILED,

    POST_AUTHORIZATION_REQUEST,
    POST_AUTHORIZATION_FAILED,
    POST_AUTHORIZATION_SUCCESS,

    GET_USER_REQUEST,
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
    POST_LOGOUT_USER_FAILED } from "../action-types/auth-action-types";
import { getCookie } from "../../utils/cookie";

const initialState = {
    registerRequest: false,
    registerFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordFailed: false,

    resetPasswordRequest: false,
    resetPasswordFailed: false,

    authorizationRequest: false,
    authorizationFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,

    refreshTokenRequest: false,
    refreshTokenFailed: false,

    logoutUserRequest: false,
    logoutUserFailed: false,

    success: false,

    auth: getCookie('accessToken') ? true : false,

    accessToken: null,
    refreshToken: null,

    email: '',
    password: '',
    token: '',

    user: {
        email: '',
        name: ''
    },
}

export const authReducer = (state = initialState, action) => {
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
                success: action.success,
                user: action.user,
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

        case POST_FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordFailed: false,
            }
        }
        case POST_FORGOT_PASSWORD_SUCCESS: {
            return { 
                ...state,
                success: action.payload.success,
                email: action.payload.email,
                forgotPasswordRequest: false,
            }
        }
        case POST_FORGOT_PASSWORD_FAILED: {
            return { 
                ...state, 
                forgotPasswordFailed: true, 
                forgotPasswordRequest: false 
            }
        }

        case POST_RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordFailed: false,
            }
        }
        case POST_RESET_PASSWORD_SUCCESS: {
            return { 
                ...state,
                success: action.payload.success,
                password: action.payload.password,
                token: action.payload.token,
                resetPasswordRequest: false,
            }
        }
        case POST_RESET_PASSWORD_FAILED: {
            return { 
                ...state, 
                resetPasswordFailed: true, 
                resetPasswordRequest: false 
            }
        }

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
                success: action.payload.success,
                auth: true,
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
                updateUserRequest: false,
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
                refreshTokenRequest: false,
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
                auth: false,
                user: {},
                accessToken: null,
                refreshToken: null,
                logoutUserRequest: false,
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