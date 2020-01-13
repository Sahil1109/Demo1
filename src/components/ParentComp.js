import React, { Component} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
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
                <MemoComp name={this.state.name} />
                {/*<RegularComp name={this.state.name}></RegularComp>*/}
                {/*<PureComp name={this.state.name}></PureComp>*/}
            </div>
        )
    }
}

export default ParentComp
