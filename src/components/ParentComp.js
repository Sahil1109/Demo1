import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sahil'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Sahil'
            })
        },2000)
    }
    
    render() {
        console.log('Parent component Render')
        return (
            <div>
                <h1>Parent component</h1>
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
