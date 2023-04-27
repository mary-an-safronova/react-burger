import { OPEN_INGREDIENT_DETAILS_MODAL, CLOSE_INGREDIENT_DETAILS_MODAL } from "../actions/ingredient-details"

const initialState = {
    openIngredientDetailsModal: false,
    ingredientDetails: false
};

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INGREDIENT_DETAILS_MODAL: {
            return {
                ...state,
                openIngredientDetailsModal: !state.openIngredientDetailsModal,
                ingredientDetails: action.payload
            }
        }
        case CLOSE_INGREDIENT_DETAILS_MODAL: {
            return {
              ...state,
              openIngredientDetailsModal: false,
              ingredientDetails: false
            }
          }
        default: {
            return state;
        }
    }
}