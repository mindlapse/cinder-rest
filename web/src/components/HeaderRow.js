import React, { Component, PropTypes } from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'


class HeaderRow extends Component {

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="Header Name"  onChange={this.props.onNameChange}>
                            {this.props.header.name}
                        </FormControl>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <FormControl type="text" placeholder="Header Value" onChange={this.props.onValueChange}>
                            {this.props.header.value}
                        </FormControl>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

HeaderRow.propTypes = {
    header : PropTypes.object.isRequired,
    onNameChange : PropTypes.object,
    onValueChange : PropTypes.object
};


export default HeaderRow;