import { apiConfig } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json()
        .then((res) => {
            return Promise.reject(`Ошибка: ${res.status}`)
        });
}

export const request = (endpoint, method, body) => {
    return fetch(`${apiConfig.baseUrl}${endpoint}`, {
        method: method,
        headers: apiConfig.headers,
        body: body,
    })
    .then(checkResponse)
  }