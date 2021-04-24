import React from 'react';


const Employee = (props) =>{

    return(
        <>
        <h1> employee name is  { props.name }</h1>
        <h2> employee salary is  { props.salary }</h2>
        <h2> employee dept is  { props.dep }</h2>

        <button className=" btn btn-primary btn-lg " >click me </button>
        <h1 className="bg-warning"> hii this is bootstrap</h1>

        </>
    )
}

export default Employee

