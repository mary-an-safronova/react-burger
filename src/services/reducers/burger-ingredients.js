import { SET_ACTIVE_TAB } from '../actions/burger-ingredients';

const initialState = {
    current: 'bun',
  };

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.payload
            }
        }
        default: {
            return state;
        }
    }
}