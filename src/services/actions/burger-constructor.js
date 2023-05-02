export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const setBun = (bun) => ({ type: ADD_BUN, payload: bun });
export const addIngredient = (ingredient) => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient) => ({ type: DELETE_INGREDIENT, payload: ingredient });
export const moveIngredient = (dragIndex, hoverIndex) => ({ type: MOVE_INGREDIENT, data: { dragIndex, hoverIndex } })
export const clearConstructor = () => ({ type: CLEAR_CONSTRUCTOR });
