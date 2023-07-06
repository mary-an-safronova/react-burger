type TServerResponse<T> = {
    success: boolean;
} & T;
  
type TRefreshResponse = TServerResponse<{
    refreshToken: string;
    accessToken: string;
}>;

export type TPath = {
    HOME: string;
    LOGIN: string;
    REGISTER: string;
    FORGOT_PASSWORD: string;
    RESET_PASSWORD: string;
    PROFILE: string;
    PROFILE_ORDERS: string;
    PROFILE_ORDERS_ID: string;
    INGREDIENTS_ID: string;
    NOT_FOUND_404: string;
    FEED: string;
    FEED_ID: string;
}

export const apiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api',
}

export const wsUrl = 'wss://norma.nomoreparties.space';
export const wsUrlOrders = `${wsUrl}/orders`;

const checkResponse = <T>(res: Response): Promise<T> => {
     return res.ok ? res.json() : res.json().then((err) => Promise.reject(err)); 
};

export const request = (endpoint: string, method: string, authorization: string, body: any): Promise<any> => {
    return fetch(`${apiConfig.baseUrl}${endpoint}`, {
        method: method,
        headers: {
            authorization: authorization,
            'Content-Type': 'application/json'
        },
        body: body,
    })
    .then(checkResponse<TRefreshResponse>)
}

export const PATH: TPath = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    PROFILE: '/profile',
    PROFILE_ORDERS: '/profile/orders',
    PROFILE_ORDERS_ID: '/profile/orders/:id',
    INGREDIENTS_ID: '/ingredients/:id',
    NOT_FOUND_404: '*',
    FEED: '/feed',
    FEED_ID: '/feed/:id',
}