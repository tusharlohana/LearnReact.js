import React from 'react'
import User from './User';
import Guest from './Guest';
import { useState } from 'react';

export default function Conditionals() {

    const [isvalid, setisvalid] = useState(true)
    const logedin = () => {
        setisvalid(true)
    }
    const logedout = () => {
        setisvalid(false)
    }
    if (isvalid) {
        return (
            <User clicked={logedout} />
        )
    }
    else
        return (
            <Guest clicked={logedin} />
        )

}
