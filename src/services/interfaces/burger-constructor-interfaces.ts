import { ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR } from "../action-types/burger-constructor-action-types";
import { TIngredient, TIngredientWithId } from "../types/data";

// Типизация экшенов
export interface IAddBunAction {
    readonly type: typeof ADD_BUN;
    readonly payload: TIngredient;
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