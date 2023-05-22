import { request } from '../../utils/api';

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED';
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS';

export const postRegister = (email, password, name) => {
  return function(dispatch) {
    dispatch({
      type: POST_REGISTER_REQUEST
    })
    request('/auth/register', 'POST', JSON.stringify({ email: email, password: password, name: name }))
    .then((data) => {
      if (data.success) {
        dispatch({ type: POST_REGISTER_SUCCESS, payload: data })
      } 
    })
    .catch(error => {
      dispatch({ type: POST_REGISTER_FAILED, payload: error });
    });
  }
}