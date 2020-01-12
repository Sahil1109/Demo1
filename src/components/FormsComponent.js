import React, { Component } from 'react'

class FormsComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: ''
        }
    }
    handleEmailChange =(event)=>{
        this.setState({
            email: event.target.value
        })
    }
     

    onSubmitButton=(event)=>{
        alert(`Your email is: ${this.state.email}`)
        event.preventDefault()
    } 
    
    render() {
        return (
            <form onSubmit={this.onSubmitButton}>
            <div>
            <label>Email:</label>
            <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
            </form>
           
        )
    }
}

export default FormsComponent
