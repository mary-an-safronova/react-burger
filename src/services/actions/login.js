import { request } from '../../utils/api';
import { setCookie } from "../../utils/cookie";

export const POST_AUTHORIZATION_REQUEST = 'POST_AUTHORIZATION_REQUEST';
export const POST_AUTHORIZATION_FAILED = 'POST_AUTHORIZATION_FAILED';
export const POST_AUTHORIZATION_SUCCESS = 'POST_AUTHORIZATION_SUCCESS';

export const postAuthorization = (email, password) => {
  return function(dispatch) {
    dispatch({
      type: POST_AUTHORIZATION_REQUEST
    })
    request('/auth/login', 'POST', '', JSON.stringify({ email: email, password: password }))
    .then((data) => {
      if (data.success) {
        setCookie('accessToken', data.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', data.refreshToken);
        dispatch({ type: POST_AUTHORIZATION_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      dispatch({ type: POST_AUTHORIZATION_FAILED, payload: error });
    });
  }
}