import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Employee from './Employee'
import EmployeeForm from './EmployeeForm'

export const EmpNav = () => {
    
    return (
        <nav className="nav bg-dark" >
        <Link to={'/'} className="btn btn-dark m-1">Employee Details</Link>
        <Link to={'/employeeform'} className="btn btn-dark m-1" >Employee Form</Link>

        </nav>
    )
}
