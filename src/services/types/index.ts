import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TApplicationActions } from '../action-types/union-types';
// import { Dispatch } from 'react';

export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, RootState, TApplicationActions>
// >;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, RootState, never, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = Dispatch<TApplicationActions>;
