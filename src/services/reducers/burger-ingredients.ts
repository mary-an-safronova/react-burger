import { SET_ACTIVE_TAB,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
} from '../action-types/burger-ingredients-action-types';
import { TBurgerIngredientsActions } from '../action-types/union-types';
import { TIngredient } from '../types/data';

type TBurgerIngredientsInitialState = {
    current: string;

    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
    ingredients: ReadonlyArray<TIngredient>;
  };

const initialState: TBurgerIngredientsInitialState = {
    current: 'bun',

    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: [],
  };

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredientsActions): TBurgerIngredientsInitialState => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.current
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