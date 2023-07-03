import { ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR } from "../action-types/burger-constructor-action-types";

export const setBun = (bun) => ({ type: ADD_BUN, payload: bun });
export const addIngredient = (ingredient) => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient) => ({ type: DELETE_INGREDIENT, payload: ingredient });
export const moveIngredient = (dragIndex, hoverIndex) => ({ type: MOVE_INGREDIENT, data: { dragIndex, hoverIndex } })
export const clearConstructor = () => ({ type: CLEAR_CONSTRUCTOR });
