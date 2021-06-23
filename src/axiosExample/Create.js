import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Create = (props) => {

    const [State, setState] = useState({ id: "", email: "", first_name: "", last_name: "" })
    const [newData, setnewData] = useState()

    const dataAdded = ()=>{
    
     
        let request = {
            "name": State.first_name ,
            "job": State.last_name
        }
        console.log ("new data is" + State)

        axios.post('https://reqres.in/api/users/', request)
            .then(function (response) {
                // console.log(response);
                props.fetchData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="m-3">
        
                {/* <input onChange={(e) => { setState({ ...State, id: e.target.value }) }} placeholder="entre id" ></input> <br></br> <br></br> */}
                {/* <input onChange={(e) => { setState({ ...State, email: e.target.value }) }} placeholder="entre email" ></input> <br></br> <br></br> */}
                <input onChange={(e) => { setState({ ...State, first_name: e.target.value }) }} placeholder="entre firstname " ></input> <br></br> <br></br>
                <input onChange={(e) => { setState({ ...State, last_name: e.target.value }) }} placeholder="entre lastname" ></input> <br></br> <br></br>
                <button onClick={()=>{dataAdded()}} className="btn btn-danger"> Create</button>
        
        </div>

    )
}

export default Create
