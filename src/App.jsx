import React from 'react'
import Nav from './Nav';
import Card from './Card';
import Employee from './Employee';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Class from './Class';
import States from './States';
import Event from './Event';
import Effect from './Effect';
import Hooks from './Hooks';
import useHook from './CustomHook';
// import MyFun from './Promise'
import Conditionals from './Conditionals'
import List from './List'

const arrValue = [10,20,30,40,50,5,5,5,510,50,4,4,4,40,54,0,4,654]

const App = () => {
    // const H = useHook()
    // const H1 = useHook()
    return (
        <>
    {/* <Conditionals/> */}
        <List num={arrValue} />
            {/* <BrowserRouter>
            <h1>this is count : {H.count}</h1>
            <h1>this is count : {H1.count}</h1>
            <button onClick={H.increment}>click</button>
            <button onClick={H1.increment}>click</button>
            <Nav />
            <MyFun />
            <Hooks />
            <Effect />
            <Event />
            <Class />
            <States />
            <Switch>
                <Route exact path='/' component={Employee} />
                <Route path='/card' component={Card} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </BrowserRouter> */}
        </>
    )
}
export default App
