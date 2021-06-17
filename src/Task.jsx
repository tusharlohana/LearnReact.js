import React, { useEffect, useState } from 'react';
import { Timerr } from './Timerr';
// import './index.css'

const Task = () => {
    let [timer, setTimer] = useState(0);
    let [demo, setDemo] = useState(false);

    let intervalID;

 
    useEffect(() => {
        if(!demo){
            return
        }
        intervalID = setInterval(() => {
            timer += 1;
            setTimer(timer)
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [demo])

    // const stopbtn = () => {
    //     clearInterval(intervalID)
    //     console.log("clear interval fired")
    // }



    // const resetbtn =()=>{
    //     setTimer(0);
    //     clearInterval(intervalID);

    //     intervalID = setInterval(() => {
    //         timer += 1;
    //         setTimer(timer)
    //     },1000);
    //     console.log("reset interval fired")

    // }


    return (
        <>
            <div className="main">
                <div className="count_div">
                    <p>{timer}</p>
                </div>
                <div className="btns">
                    <input type="button" onClick={() => setDemo(true)} value="Start" />
                    <input type="button" onClick={() => setDemo(false)} value="Stop" />
                    {/* <input type="button" onClick={resetbtn}  value="reset"/> */}
                    <p>this is task page</p>

                </div>

            </div>
            <Timerr data={timer} />
        </>
    )
}

export default Task