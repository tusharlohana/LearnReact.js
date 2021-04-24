import React , {useState ,useEffect}from 'react';


var Effect =() =>{
    const [ count , setCount] = useState(0)
    const incriment = () =>{
        setCount(count + 1)
    }
    const decriment = () =>{
        setCount(count - 1)
    }


    useEffect(
        ()=>{
            console.log("effect called")
        }
    )

    return(
        <>
        <h1>the count is {count}</h1>
        <button onClick={incriment} >incriment</button>
        <button onClick={decriment} >decriment</button>
        </>
    )
}
export default Effect