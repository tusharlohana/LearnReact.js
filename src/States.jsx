import React, { Component } from 'react';

class Hi extends Component {
       constructor(props){
           super(props)
           this.state = {
            // name : "tushar",
            // lastName : "lohana",
            // salary : this.props.salary
            date : new Date()
        }  
       }
       componentDidMount(){
           this.int = setInterval(() => this.time() , 1000)
       }
       componentDidUnmount(){
           clearInterval(this.int)
       }
       time(){
        this.setState ({
            date : new Date()
        })
       }
       

    render(){
        return(
            <div>
            <h1>hii this is a class </h1>
            <p>the time is {this.state.date.toLocaleTimeString()}</p>
      

            {/* <h1>my mane is {this.state.name} {this.state.lastName} {this.state.salary}</h1> */}
            </div>
        )
    }
}
export default Hi