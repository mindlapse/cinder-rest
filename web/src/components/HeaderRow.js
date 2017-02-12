import React, { Component, PropTypes } from 'react'
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'


class HeaderRow extends Component {

    render() {

        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <FormControl type="text" placeholder="Header Name"
                                     value={this.props.header.name}
                                     onChange={this.props.onNameChange}>
                        </FormControl>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <FormControl type="text" placeholder="Header Value"
                                     value={this.props.header.value}
                                     onChange={this.props.onValueChange} />
                    </FormGroup>
                    {' '}
                    <Button onClick={this.props.onDelete}>x</Button>

                </Form>
            </div>
        )
    }
}

HeaderRow.propTypes = {
    header : PropTypes.object.isRequired,
    onNameChange : PropTypes.func.isRequired,
    onValueChange : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired
};


export default HeaderRow;