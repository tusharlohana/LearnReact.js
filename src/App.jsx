import React from 'react';
import useCustomHooks from './CustomHook';


function App(){

    const H = useCustomHooks()
    const H1 = useCustomHooks()

    return(
        <>
        <h1>the count is { H.count }</h1>
        <button onClick={H.increment}>incriment</button>
        <h1>the count is { H1.count }</h1>
        <button onClick={H1.increment}>incriment</button>
        </>
    )
}

export default App
