export const ADD_HEADER = 'ADD_HEADER';
export const SET_HEADER = 'SET_HEADER';
export const UPDATE_HEADER = 'UPDATE_HEADER';
export const DELETE_HEADER = 'DELETE_HEADER';

export const addHeader = (index) => {
    return {type: ADD_HEADER, index }
};

export const setHeader = (index, header) => {
    return {type: SET_HEADER, index, header}
};

export const updateHeader = (index, propName, value) => {
    return {
        type: UPDATE_HEADER,
        index,
        propName,
        value
    }
}

export const deleteHeader = (index) => {
    return {
        type: DELETE_HEADER,
        index
    }
}