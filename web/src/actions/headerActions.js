export const ADD_HEADER = 'ADD_HEADER';
export const SET_HEADER = 'SET_HEADER';

export const addHeader = (index) => {
    return {type: ADD_HEADER, index }
};

export const setHeader = (index, header) => {
    return {type: SET_HEADER, index, header}
};