import React, { useState } from 'react';

const Hook = ()=>{
    const nameVariable = useState("tusharr")

     const name = nameVariable[0];
       
     const setName = nameVariable[1]

    //  setName("rahul")




    // const [ name ,setName] = useState("tushar");
    // const click = ()=>{
    //     setName("rahul")
    // }
    // const [car , setCar] = useState([{car : "maruti" }])
    return(
        <>
        <h1>my name is hook {name} </h1>
        <h2>display object value</h2>
        <button > click me</button>
        
        </>

    )
}

export default Hook