import { type } from "os";

export type TServerMessage = {
    readonly success: boolean;
    readonly message: string;
}

export type TTokens = {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly success: boolean;
}

export type TIngredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
}

export type TIngredientWithId = TIngredient & { readonly id?: number };