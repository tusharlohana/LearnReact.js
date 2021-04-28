import React from 'react'
import ReactDOM from 'react-dom'


export default function Guest(props) {
    return (
        <div>
            <h1>this is a guest page </h1>
            <button  onClick={props.clicked}  >signin</button>
            <button>signup</button>
        </div>
    )
}
