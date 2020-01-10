import React from 'react'
import Persons from './Persons'

function NameList() {
    const names =['AB', 'Virat','Rohit','Smith']

    const persons =[
        {
            id: 1,
            name: 'AB',
            age: 34,
            skill: '360'
        },
        {
            id: 2,
            name: 'Virat',
            age: 31,
            skill: 'Cover drive'
        },
        {
            id: 3,
            name: 'Rohit',
            age: 31,
            skill: 'Pull Shot'
        },
        {
            id: 4,
            name: 'Smith',
            age: 30,
            skill: 'Nothing'
        },
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
