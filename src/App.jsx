import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, useHistory, Link } from 'react-router-dom'
import Props from './Props';
import RCounter from './RCounter';
import Task from './Task';
import { Timerr } from './Timerr';
import './index.css';


const App = () => {
    //    const history = useHistory()
    return (
        <>

            <RCounter />
            {/* <Timerr></Timerr> */}
            {/* <BrowserRouter>
        <Link to = {'/'}> Task  </Link>
        <Link to = { '/timer'}> Timer </Link>
        <Switch>
           <Route exact path="/" component={Task} />
           <Route exact path="/timer" component={Timerr} />
        </Switch>
        </BrowserRouter> */}

            {/* <Task/> */}


            {/* <Props name="tushar">
            <p>tihs is a childern </p>
            <button>one more</button>
        </Props>
        <Props name="sandeep"></Props>
        <Props name="pushpa"></Props> */}
        </>
    )
}
export default App