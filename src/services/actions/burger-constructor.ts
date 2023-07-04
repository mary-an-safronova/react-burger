import { ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR } from "../action-types/burger-constructor-action-types";
import { TIngredient, TIngredientWithId } from "../types/data";

import { IAddBunAction,
    IAddIngredientAction,
    IDeleteIngredientAction,
    IMoveIngredientAction,
    IClearConstructorAction
} from '../interfaces/burger-constructor-interfaces';

export const setBun = (bun: TIngredient): IAddBunAction => ({ type: ADD_BUN, payload: bun });

export const addIngredient = (ingredient: TIngredientWithId): IAddIngredientAction => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient: TIngredientWithId): IDeleteIngredientAction => ({ type: DELETE_INGREDIENT, payload: ingredient });
export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredientAction => ({ type: MOVE_INGREDIENT, data: { dragIndex, hoverIndex } })
export const clearConstructor = (): IClearConstructorAction => ({ type: CLEAR_CONSTRUCTOR });
