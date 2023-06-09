import {
    ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    MOVE_INGREDIENT,
    CLEAR_CONSTRUCTOR,
} from '../action-types/burger-constructor-action-types';
import { TBurgerConstructorActions } from '../interfaces/union-interfaces';
import { TIngredientWithId, TIngredient } from '../types/data';

type TBurgerConstructorInitialState = {
    readonly ingredientList: ReadonlyArray<TIngredientWithId>;
    readonly bunsList: Array<TIngredient>;
}

const initialState: TBurgerConstructorInitialState = {
    ingredientList: [],
    bunsList: [],
}

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorInitialState => {
    switch (action.type) {
        case ADD_BUN: {
            return {
                ...state,
                bunsList: state.bunsList.find((item) => item._id === action.payload._id) ? [...state.bunsList] : [action.payload],
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredientList: [...state.ingredientList, action.payload],
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredientList: state.ingredientList.filter((item) => item.id !== action.payload.id)
            }
        }
        case MOVE_INGREDIENT: {
			const dragConstructor = [...state.ingredientList];
			dragConstructor.splice(
				action.data.dragIndex,
				0,
				dragConstructor.splice(action.data.hoverIndex, 1)[0]
			)
			return {
				...state,
				ingredientList: dragConstructor
			}
		}
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                ingredientList: [],
                bunsList: [],
            }
        }
        default: {
            return state;
        }
    }
}
