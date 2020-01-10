import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className= props.primart? 'primary':''
    return (
        <div>
            <h1 className="primary">Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
