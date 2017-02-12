
import { combineReducers } from 'redux'
import { ADD_HEADER, SET_HEADER } from '../actions/headerActions';


const reduce = combineReducers({
    headers
});


function headers(headerArray = [], action) {
    switch (action.type) {
        case ADD_HEADER:
            return [...headerArray, ...[{index : action.index}]];
        case SET_HEADER:
            return [
                ...headerArray.slice(0, action.index),
                action.header,
                ...headerArray.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

export default reduce;