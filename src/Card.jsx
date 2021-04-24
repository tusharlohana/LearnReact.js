import React from 'react';
import img1 from './Images/img1.jpg';

const Card = (props) =>{
    return(
        <>

        <div className="card">
            <h1>{ props.title }</h1>
            <img src={img1}  alt="this is an img " ></img>
            <p>{ props.discription } </p>
            <button  >click me </button>
        </div>

        </>

    )
}
export default Card