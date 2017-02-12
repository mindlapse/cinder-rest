
import { combineReducers } from 'redux'
import { ADD_HEADER, SET_HEADER, UPDATE_HEADER, DELETE_HEADER } from '../actions/headerActions';


const reduce = combineReducers({
    headers
});


function headers(headerArray = [], action) {
    console.log("Received action");
    console.log(action);

    let newArray;
    switch (action.type) {
        case ADD_HEADER:
            newArray = [...headerArray, ...[{index : action.index, name : "", value : ""}]];
            break;
        case UPDATE_HEADER:
            const newHeader = {
                ...headerArray[action.index],
                ...{[action.propName]: action.value}
            }
            newArray = setHeader(headerArray, action.index, newHeader);
            break;
        case SET_HEADER:
            newArray = setHeader(headerArray, action.index, action.header)
            break;
        case DELETE_HEADER:
            newArray = [
                ...headerArray.slice(0, action.index),
                ...headerArray.slice(action.index+1)
            ]
            break
        default:
            newArray = headerArray;
    }
    return newArray
}


function setHeader(headerArray, index, header) {
    return [
        ...headerArray.slice(0, index),
        header,
        ...headerArray.slice(index + 1)
    ]
}

export default reduce;