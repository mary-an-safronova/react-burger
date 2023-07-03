import { SET_ACTIVE_TAB,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
} from '../action-types/burger-ingredients-action-types';

const initialState = {
    current: 'bun',

    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: [],
  };

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.payload
            }
        }
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return { 
                ...state, 
                ingredients: action.ingredients, 
                ingredientsRequest: false 
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return { 
                ...state, 
                ingredientsFailed: true, 
                ingredientsRequest: false 
            }
        }
        default: {
            return state;
        }
    }
}