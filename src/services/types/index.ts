import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthActions } from '../actions/auth';
import { TBurgerConstructorActions } from '../actions/burger-constructor';
import { TBurgerIngredientsActions } from '../actions/burger-ingredients';
import { TOrderDetailsActions } from '../actions/order-details';
import { TWsAuthActions } from '../actions/ws-auth';
import { TWsActions } from '../actions/ws';

type TApplicationActions = TAuthActions 
| TBurgerConstructorActions 
| TBurgerIngredientsActions
| TOrderDetailsActions
| TWsAuthActions
| TWsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;