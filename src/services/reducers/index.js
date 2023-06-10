import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { orderDetailsReducer } from './order-details';
import { burgerConstructorReducer } from './burger-constructor';
import { authReducer } from './auth';
import { wsReducer } from './wsReducer';
import { wsAuthReducer } from './wsAuthReducer';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    orderDetails: orderDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    auth: authReducer,
    ws: wsReducer,
    wsAuth: wsAuthReducer,
});