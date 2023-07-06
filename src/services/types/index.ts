import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { store } from '../store';
import { TApplicationActions } from '../action-types/union-types';

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, RootState, never, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;