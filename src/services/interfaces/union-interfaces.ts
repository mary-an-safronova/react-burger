import { IPostRegisterRequestAction,
    IPostRegisterFailedAction,
    IPostRegisterSuccessAction,
    
    IPostForgotPasswordRequestAction,
    IPostForgotPasswordFailedAction,
    IPostForgotPasswordSuccessAction,
    
    IPostResetPasswordRequestAction,
    IPostResetPasswordFailedAction,
    IPostResetPasswordSuccessAction,
    
    IPostAuthorizationRequestAction,
    IPostAuthorizationFailedAction,
    IPostAuthorizationSuccessAction,
    
    IGetUserRequestAction,
    IGetUserFailedAction,
    IGetUserSuccessAction,
    
    IUpdateUserRequestAction,
    IUpdateUserFailedAction,
    IUpdateUserSuccessAction,
    
    IPostRefreshTokenRequestAction,
    IPostRefreshTokenFailedAction,
    IPostRefreshTokenSuccessAction,
    
    IPostLogoutUserRequestAction,
    IPostLogoutUserFailedAction,
    IPostLogoutUserSuccessAction,
} from './auth-action-interfaces';

import { IAddBunAction,
    IAddIngredientAction,
    IDeleteIngredientAction,
    IMoveIngredientAction,
    IClearConstructorAction
} from './burger-constructor-interfaces';

import { ISetActiveTabAction,
    IGetIngredientsRequestAction,
    IGetIngredientsFailedAction,
    IGetIngredientsSuccessAction
} from './burger-ingredients-interfaces';

import { IPostOrderRequestAction,
  IPostOrderFailedAction,
  IPostOrderSuccessAction,
  ICloseOrderDetailsModalAction
} from './order-details-interfaces';

import { IWsConnectionStartAction,
  IWsConnectionSuccessAction,
  IWsConnectionErrorAction,
  IWsConnectionClosedAction,
  IWsGetMessageAction,
  IWsSendMessageAction
} from './ws-interfaces';

import { IWsAuthConnectionStartAction,
  IWsAuthConnectionSuccessAction,
  IWsAuthConnectionErrorAction,
  IWsAuthConnectionClosedAction,
  IWsAuthGetMessageAction,
  IWsAuthSendMessageAction
} from './ws-auth-interfaces';

export type TAuthActions = IPostRegisterRequestAction
  | IPostRegisterFailedAction
  | IPostRegisterSuccessAction

  | IPostForgotPasswordRequestAction
  | IPostForgotPasswordFailedAction
  | IPostForgotPasswordSuccessAction
  
  | IPostResetPasswordRequestAction
  | IPostResetPasswordFailedAction
  | IPostResetPasswordSuccessAction
  
  | IPostAuthorizationRequestAction
  | IPostAuthorizationFailedAction
  | IPostAuthorizationSuccessAction
  
  | IGetUserRequestAction
  | IGetUserFailedAction
  | IGetUserSuccessAction
  
  | IUpdateUserRequestAction
  | IUpdateUserFailedAction
  | IUpdateUserSuccessAction
  
  | IPostRefreshTokenRequestAction
  | IPostRefreshTokenFailedAction
  | IPostRefreshTokenSuccessAction
  
  | IPostLogoutUserRequestAction
  | IPostLogoutUserFailedAction
  | IPostLogoutUserSuccessAction;

export type TBurgerConstructorActions = IAddBunAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearConstructorAction;

export type TBurgerIngredientsActions = ISetActiveTabAction
| IGetIngredientsRequestAction
| IGetIngredientsFailedAction
| IGetIngredientsSuccessAction;

export type TOrderDetailsActions =
| IPostOrderRequestAction
| IPostOrderFailedAction
| IPostOrderSuccessAction
| ICloseOrderDetailsModalAction;

export type TWsActions = IWsConnectionStartAction
| IWsConnectionSuccessAction
| IWsConnectionErrorAction
| IWsConnectionClosedAction
| IWsGetMessageAction
| IWsSendMessageAction;

export type TWsAuthActions = IWsAuthConnectionStartAction
| IWsAuthConnectionSuccessAction
| IWsAuthConnectionErrorAction
| IWsAuthConnectionClosedAction
| IWsAuthGetMessageAction
| IWsAuthSendMessageAction;

export type TApplicationActions = TAuthActions 
| TBurgerConstructorActions 
| TBurgerIngredientsActions
| TOrderDetailsActions
| TWsAuthActions
| TWsActions;