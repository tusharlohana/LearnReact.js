import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Card from './Card';
import Employee from './Employee';
import { BrowserRouter} from 'react-router-dom';
import { Route , Switch } from 'react-router-dom';
import Signup from './Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Class from './Class';
import States from './States';
import Event from './Event';
import Effect from './Effect';
import Hooks from './Hooks';


import App from './App'

ReactDOM.render(
    <>
    <BrowserRouter>
    
           

        {/* <Employee name="tushar" salary="21000" dep=" info tech" />

        <div style={{ display: 'flex' }}>
            <Card title="physics" discription="this is a physics book" />
            <Card title="maths" discription="this is a maths book" />
            <Card title="React" discription="this is a react book" />
        </div> */}
        
        <App/>

        <Nav />
        <Hooks/>
             {/* <Effect/> */}
        {/* <Event/>
        <Class />
        <States /> */}
        <Switch>
            

            <Route exact path='/' component ={ Employee } />
            <Route path='/card' component = { Card }  />
            <Route path = '/signup' component = { Signup } />

        </Switch>

    </BrowserRouter>
</>
    
    ,

    document.getElementById('root')
)