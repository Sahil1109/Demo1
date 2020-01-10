import React from 'react'

function Persons({person}) {
    return (
        <div>
            <h2>
                I'm  {person.name}. 
                I'm {person.age} years old. 
                I am good at {person.skill}
            </h2>
        </div>
    )
}

export default Persons
