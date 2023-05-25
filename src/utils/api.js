import { getCookie } from "./cookie";
import { refreshToken } from "../services/actions/auth";

export const apiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api',
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else if ((res.status === 401 || res.status === 403) && getCookie("refreshToken") !== undefined) {
        refreshToken()
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