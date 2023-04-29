import {
    ADD_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
} from '../actions/burger-constructor';

const initialState = {
    ingredientList: [],
    bunsList: [],
}

export const burgerConstructorReducer = (state = initialState, action) => {
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
        default: {
            return state;
        }
    }
}
