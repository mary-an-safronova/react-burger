import { request } from "../../utils/api";
import { SET_ACTIVE_TAB,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
} from '../action-types/burger-ingredients-action-types';
import { TIngredient } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

// Типизация экшенов
export interface ISetActiveTabAction {
  readonly type: typeof SET_ACTIVE_TAB;
  readonly current: string;
}
export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: ReadonlyArray<TIngredient>;
}

// Объединяем в Union
export type TBurgerIngredientsActions =
| ISetActiveTabAction
| IGetIngredientsRequestAction
| IGetIngredientsFailedAction
| IGetIngredientsSuccessAction;

export const setActiveTab = (value: string): ISetActiveTabAction => ({ type: SET_ACTIVE_TAB, current: value});

export const getIngredientsRequestAction = (): IGetIngredientsRequestAction => ({ type: GET_INGREDIENTS_REQUEST });
export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({ type: GET_INGREDIENTS_FAILED });
export const getIngredientsSuccessAction = (data: ReadonlyArray<TIngredient>): IGetIngredientsSuccessAction => ({ type: GET_INGREDIENTS_SUCCESS, ingredients: data});

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