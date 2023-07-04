export type TUser = {
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly success: boolean;
    readonly user: {
      readonly email: string;
      readonly name: string;
    }
  }
  
  export type TServerMessage = {
    readonly success: boolean;
    readonly message: string;
  }

  export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}