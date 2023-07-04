import { ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR } from "../action-types/burger-constructor-action-types";
import { TIngredient, TIngredientWithId } from "../types/data";

// Типизация экшенов
export interface IAddBunAction {
    readonly type: typeof ADD_BUN;
    readonly payload: TIngredientWithId;
}
export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly payload: TIngredientWithId;
}
export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: TIngredientWithId;
}
export interface IMoveIngredientAction {
    readonly type: typeof MOVE_INGREDIENT;
    data: {
        dragIndex: number;
        hoverIndex: number;
    }
}
export interface IClearConstructorAction {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

// Объединяем в Union
export type TBurgerConstructorActions =
  | IAddBunAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearConstructorAction;

export const setBun = (bun: TIngredient): IAddBunAction => ({ type: ADD_BUN, payload: bun });

export const addIngredient = (ingredient: TIngredient): IAddIngredientAction => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient: TIngredient): IDeleteIngredientAction => ({ type: DELETE_INGREDIENT, payload: ingredient });
export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredientAction => ({ type: MOVE_INGREDIENT, data: { dragIndex, hoverIndex } })
export const clearConstructor = (): IClearConstructorAction => ({ type: CLEAR_CONSTRUCTOR });
