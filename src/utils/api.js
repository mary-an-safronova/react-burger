export const apiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api',
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json()
        .then((res) => {
            return Promise.reject(`Ошибка: ${res.status}`)
        });
}

export const request = (endpoint, method, authorization, body) => {
    return fetch(`${apiConfig.baseUrl}${endpoint}`, {
        method: method,
        headers: {
            authorization: authorization,
            'Content-Type': 'application/json'
        },
        body: body,
    })
    .then(checkResponse)
}

export const PATH = {
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
}