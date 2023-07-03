import { request } from "../../utils/api";
import { SET_ACTIVE_TAB,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from '../action-types/burger-ingredients-action-types';

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