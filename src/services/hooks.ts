import { TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook } from "react-redux";
import { RootState } from "./types";
import { TApplicationActions } from './interfaces/union-interfaces';
import { ThunkDispatch } from "redux-thunk";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TApplicationActions>>;