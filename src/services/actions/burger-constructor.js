export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const setBun = (bun) => ({ type: ADD_BUN, payload: bun });
export const addIngredient = (ingredient) => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = (ingredient) => ({ type: DELETE_INGREDIENT, payload: ingredient });
