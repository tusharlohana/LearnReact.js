import React, { useRef, useState } from 'react';
import './index.css';

const Task = () => {
    let [timer, setTimer] = useState(0);
    const increment = useRef(null);  

    const startbtn = () => {
        increment.current = setInterval(() => {
        timer += 1;
        setTimer(timer)
    }, 1000);
}

const stopbtn = () => {
   clearInterval(increment.current);
   setTimer(timer);
   
}
    

    return (
        <>
            <div className="main">
                <div className="count_div">
                    <p>{timer}</p>
                </div>
            <div className="btns">
                <input type="button" onClick={startbtn} value="Start"/>
                <input type="button" onClick={stopbtn} value="Stop"/>
                <input type="button" value="Change"/>

            </div>

            </div>   
        </>
    )
}

export default Task