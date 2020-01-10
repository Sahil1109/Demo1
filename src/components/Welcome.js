import React from 'react';
// import ReactDOM from 'react-dom';

class Welcome extends React.Component{
    render(){
        const {name, idolize}=this.props
        return(
            <h2>This guy {name} idolize {idolize} </h2>
        )
    }
}

export default Welcome;