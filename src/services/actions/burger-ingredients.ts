import { request } from "../../utils/api";
import { SET_ACTIVE_TAB,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from '../action-types/burger-ingredients-action-types';
import { TIngredient } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

import { ISetActiveTabAction,
  IGetIngredientsRequestAction,
  IGetIngredientsFailedAction,
  IGetIngredientsSuccessAction
} from '../interfaces/burger-ingredients-interfaces';

export const setActiveTab = (value: string): ISetActiveTabAction => ({ type: SET_ACTIVE_TAB, current: value});

export const getIngredientsRequestAction = (): IGetIngredientsRequestAction => ({ type: GET_INGREDIENTS_REQUEST });
export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({ type: GET_INGREDIENTS_FAILED });
export const getIngredientsSuccessAction = (data: Array<TIngredient>): IGetIngredientsSuccessAction => ({ type: GET_INGREDIENTS_SUCCESS, ingredients: data});

export const getData: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getIngredientsRequestAction())
    request('/ingredients', 'GET', '', null)
    .then(({ success, data }) => {
      if (success) {
        dispatch(getIngredientsSuccessAction(data))
      } else {
        dispatch(getIngredientsFailedAction())
      }
    }).catch( err => {
      dispatch(getIngredientsFailedAction())
    })
  }
} 