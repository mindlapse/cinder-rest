import React, { PropTypes } from 'react';
import HeaderRow from './HeaderRow';
import { Button } from 'react-bootstrap';

const HeadersPane = ({headers, onAdd, onChange, onDelete}) => {
    // TODO

    const headerComps = headers.map(
        (header, index) => {
            return (
                <HeaderRow key={index} header={header}
                   onNameChange={(e) => onChange(e, 'name', index)}
                   onValueChange={(e) => onChange(e, 'value', index)}
                   onDelete={() => onDelete(index)}
                />
            )
        }
    );

    return (
        <div>
            { headerComps }
            <Button onClick={() => {onAdd(headers.length)}}>Add</Button>
        </div>
    )
};


HeadersPane.propTypes = {
    onAdd: PropTypes.func.isRequired
    // onDispatch : PropTypes.func.isRequired


}

export default HeadersPane;