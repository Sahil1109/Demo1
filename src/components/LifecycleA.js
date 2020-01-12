import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sahil'
        }
        console.log('Constructor was called')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('Render called')
        return (
            <div>
                
                <h1>lifecycleA</h1>
            </div>
        )
    }
}

export default LifecycleA
