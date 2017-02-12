import { connect } from 'react-redux'
import HeadersPane from './HeadersPane'
import { addHeader } from '../actions/headerActions'



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
            onAdd: () => {
                console.log("dispatch")
                dispatch(addHeader(headerId++))
            },
            setHeader: (index) => {

            }
        }
    })(HeadersPane)
