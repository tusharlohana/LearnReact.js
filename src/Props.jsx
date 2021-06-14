import React from 'react'

const Props = (props) => {
    return (
        <div>
            <h1>my name is {props.name}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Props
