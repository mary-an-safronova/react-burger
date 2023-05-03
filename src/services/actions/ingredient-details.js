export const OPEN_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL = 'CLOSE_INGREDIENT_DETAILS_MODAL';

export const addIgredientDetails = (ingredient) => ({ type: OPEN_INGREDIENT_DETAILS_MODAL, payload: ingredient })
export const deleteIgredientDetails = () => ({ type: CLOSE_INGREDIENT_DETAILS_MODAL })