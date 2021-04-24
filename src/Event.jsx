import React from 'react';

  function myFun(){
      document.getElementById('demo').style.color = 'red'
  }
  
  function my(){
      document.getElementById('demo').style.color = 'blue'
  }

function Eve(){
    return(
        <>
        <h1 id='demo' className="bg-warning" >this is an event component</h1>
        <button onClick={myFun}  onMouseEnter={my}  className="btn btn-xl btn-success" >click me </button>
        <button className="btn btn-xl btn-success" >click me </button>
        </>
    )
}


export default Eve