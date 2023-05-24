import { request } from "../../utils/api";

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export const setActiveTab = (value) => ({ type: SET_ACTIVE_TAB, payload: value});

export function getData() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
    request('/ingredients', 'GET', '', null)
    .then(({ success, data }) => {
        if (success) {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                ingredients: data
            })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    }).catch( err => {
            dispatch({
                type: GET_INGREDIENTS_FAILED
            })
        })
  }
} 