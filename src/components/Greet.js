import React from 'react';

const Greet= (props)=>{
    const {name,idolize,children}= props
    return (
        <div>
        <h1>Hola {props.name} idolize {props.idolize}</h1>
        {props.children}
        </div>
        )
}

export default Greet;