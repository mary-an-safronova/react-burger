import { SET_ACTIVE_TAB,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
  } from '../action-types/burger-ingredients-action-types';
  import { TIngredient } from "../types/data";

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
    readonly ingredients: Array<TIngredient>;
  }