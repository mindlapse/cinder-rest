import { connect } from 'react-redux'
import HeadersPane from './HeadersPane'
import { addHeader, updateHeader, deleteHeader } from '../actions/headerActions'



export default connect(
    (store) => {
        console.log("store is");
        console.log(store);
        return {
            headers : store.headers
        }
    },
    (dispatch) => {
        return {
            onAdd: (id) => {
                dispatch(addHeader(id))
            },
            onChange: (e, propName, index) => {
                dispatch(updateHeader(index, propName, e.target.value))
            },
            onDelete: (index) => {
                dispatch(deleteHeader(index))
            }
        }
    })(HeadersPane)
