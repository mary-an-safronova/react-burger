import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from './order-details';
import { burgerConstructorReducer } from './burger-constructor';
import { registerReducer } from './register';
import { authorizationReducer } from './login';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    register: registerReducer,
    authorization: authorizationReducer,
    user: userReducer,
});