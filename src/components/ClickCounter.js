import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const {count, incrementCount}= this.props
        return (
            <div>
                <button onClick={incrementCount}>CLicked {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
