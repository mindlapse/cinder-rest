import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateBody } from '../actions/bodyActions'

class BodyView extends Component {
    render() {
        return (
            <FormGroup>
                <FormControl componentClass="textarea" rows="10" className="requestBody"
                          value={this.props.body}
                          onChange={this.props.onChange} />
            </FormGroup>
        )
    }
}


export default connect(
    (state) => ({
        body : state.body
    }),
    (dispatch) => ({
        onChange : (e) => dispatch(updateBody(e.target.value))
    })
)(BodyView)