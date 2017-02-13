import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setMethod, setUrl } from '../actions/urlActions'

class Url extends Component {
    render() {
        return (
            <FormGroup>
                <InputGroup>
                    <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title={this.props.method}
                        >
                        {["GET", "POST", "PUT", "DELETE"].map((method, index) => (
                            <MenuItem onSelect={this.props.setMethod} key={index} eventKey={method}>{method}</MenuItem>
                        ))}
                    </DropdownButton>
                    <FormControl type="text" placeholder="URL"
                                 value={this.props.url}
                                 onChange={this.props.setUrl}>
                    </FormControl>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default connect(
    (state) => ({
        method : state.url.method,
        body : state.url.body
    }),
    (dispatch) => ({
        setUrl      : (e) => dispatch(setUrl(e.target.value)),
        setMethod   : (eventKey) => dispatch(setMethod(eventKey))
    })
)(Url);