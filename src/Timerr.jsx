import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import './index.css'



export const Timerr = (props) => {

    const [city, setCity] = useState("indore")
    const [cityData, setCityData] = useState()

    const submitValue =()=>{

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=658767b0ae936b022f59a69f44868419&units=metric`)
    .then(function (response) {
        // handle success
        setCityData(response.data)

        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });}

    useEffect(() => {
        // Make a request for a user with a given ID
        submitValue()    

    }, [])

    return (
        <>
            {/* <Nav></Nav> */}
            <div className="main">
                <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Search City..." ></input>
                <div className="container">
                    <div>{cityData && cityData?.name}</div>

                    <div className="flex">
                        <div>{cityData && cityData?.weather[0]?.description}</div>
                        <div>{cityData && cityData?.weather[0]?.main}</div>
                    </div>

                    <div className="img_div"><img src={`http://openweathermap.org/img/wn/${cityData?.weather[0]?.icon}.png`}></img></div>
                </div>
                <button onClick={submitValue} >Get Forcast</button>
            </div>

            {/* <p>this is timer page { props.data }</p>
            <Fun data={props.data} /> */}

        </>
    )
}

const Fun = (props) => {
    return <h1 >new comp{props.data} </h1>
}