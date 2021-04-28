import React from 'react'
import ReactDOM from 'react-dom'


export default function User(props) {
    return (
        <div>
            <h1>this is a user page </h1>
            <button onClick={props.clicked} >logout</button>
        </div>
    )
}
