import React from 'react'

function Columns() {
    const items =[0,1]
    return (
        <React.Fragment>{
            items.map(item=>(
                <React.Fragment key={item.id}>
                <h1>Title</h1>
                <p>{item.title}</p>
                </React.Fragment>
            ))
        }
            <td>Name</td>
            <td>Sahil</td>
        </React.Fragment>
    )
}

export default Columns
