import React,{ useState , useEffect } from 'react';

//  useEffect() ---> componentDidMount , componentDidUpdate , componentWillUnmount

// useState(value , function)
// useEffect(function , Array)

const Hooks =()=>{

    // const VarName = useState("tusharr")
    // const name =  VarName[0]
    // const setName = VarName[1]

    // const [ name , setName ] = useState("tusharlohana")

    //   const click =()=>{
    //       setName("ayushi")
    //   }  


    // ----> useState( ) : current value  (name) , function ()
    //  useState(Cval, fun())

    const [count , setCount] = useState(0)
    const [count1 , setCount1] = useState(20)
        
    const incriment =()=>{
            setCount(count + 1 )
        }
        
        const decriment =()=>{
            setCount1(count1 + 1 )
        }

        useEffect( 
            ()=>{
                console.log("effect is called")
            } )

    return(
        <>
        {/* <h1>my name is {name}</h1>
        <button onClick={click} >click to change name</button> */}
        
        <h1>the count is { count }</h1>
        <h1>the count is { count1 }</h1>
        <button className="btn btn-success m-1" onClick={incriment}>incriment</button>
        <button className="btn btn-primary m-1" onClick={decriment}>decriment</button>
        
        </>
    )

}
export default Hooks