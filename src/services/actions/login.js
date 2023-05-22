import { request } from '../../utils/api';

export const POST_AUTHORIZATION_REQUEST = 'POST_AUTHORIZATION_REQUEST';
export const POST_AUTHORIZATION_FAILED = 'POST_AUTHORIZATION_FAILED';
export const POST_AUTHORIZATION_SUCCESS = 'POST_AUTHORIZATION_SUCCESS';

export const postAuthorization = (email, password) => {
  return function(dispatch) {
    dispatch({
      type: POST_AUTHORIZATION_REQUEST
    })
    request('/auth/login', 'POST', JSON.stringify({ email: email, password: password }))
    .then((data) => {
      if (data.success) {
        dispatch({ type: POST_AUTHORIZATION_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      dispatch({ type: POST_AUTHORIZATION_FAILED, payload: error });
    });
  }
}