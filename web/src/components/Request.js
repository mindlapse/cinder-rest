import React, { Component } from 'react'
import Url from './Url'
import Headers from './Headers'
import Body from './Body'

class Request extends Component {

    render() {
        return (
            <div>
                <Url />
                <Headers />
                <Body />
            </div>
        )
    }
}

export default Request