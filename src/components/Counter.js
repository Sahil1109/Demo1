import React from 'react'

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0
        }
    }

    counterChange(){
        // this.setState({
        //     count:this.state.count+1,
        // }, ()=>{console.log('Callback value',this.state.count)}
        // )
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
        console.log(this.state.count)
    }

    counterChangeFive(){
        this.counterChange()
        this.counterChange()
        this.counterChange()
        this.counterChange()
        this.counterChange()
    }

    render(){
        return(
            <div>
                <h1>Count:  {this.state.count}</h1>    
                <button onClick={()=>{this.counterChangeFive()}}>Increment</button>
            </div>
        )
    }
}

export default Counter