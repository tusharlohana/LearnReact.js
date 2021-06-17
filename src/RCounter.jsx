import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { decNumber, incNumber } from './action/index'


const RCounter = () => {
    const stateChange = useSelector(state => state.changeNumber)
    console.log(stateChange)

    const dispatch = useDispatch()
    return (
        <div className="container">
            <h1>Counter</h1>
            <h2>Using React and Redux</h2>

            <div className="counter">
                <a onClick={()=> dispatch(decNumber()) } className="minus"> - </a>
                <input className="input" name="value" type="text" value={stateChange}></input>
                <a onClick={()=> dispatch(incNumber()) } className="plus"> + </a>
            </div>
            
        </div>
    )
}

export default RCounter
