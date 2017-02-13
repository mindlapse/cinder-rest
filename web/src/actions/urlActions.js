export const SET_METHOD = "SET_METHOD";
export const SET_URL = "SET_URL";

export const setMethod = (method) => ({
    type : SET_METHOD,
    method
})

export const setUrl = (url) => ({
    type : SET_URL,
    url
})