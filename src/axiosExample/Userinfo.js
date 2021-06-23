import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import userData from './data/db.json'


const Userinfo = () => {
    // const [Id, setId] = useState();
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     myData();
    // }, [])

    // const myData = () => {
    //     axios.get('https://reqres.in/api/users/')
    //         .then(function (res) {
    //             //console.log(res.data.data[0].email);

    //             setData(res.data.data);
    //             console.log(data);
    //             console.log(data[0])
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }
    
    const updateData = (values) => {
        let newdata = [...data]
        newdata.push(values)
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            {/* <h1>you have selected {Id}</h1>
            <select onChange={(e) => { setId(e.target.value) }}>
                <option value="0" >1</option>
                <option value="1" >2</option>
                <option value="2" >3</option>
                <option value="3" >4</option>
                <option value="4" >5</option>
                <option value="5" >6</option>
            </select> */}

            {/* <input onChange={(e) => { setId(e.target.value) }}></input> */}
            <div>
                {/* <img src={data.avatar}></img> */}
                {/* <button onClick={() => { myData() }} className="btn btn-xxl btn-success m-3" > myData</button> */}
                <Table className="w-50 m-3" striped bordered hover size="" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>action</th>
                        </tr>
                        {/* <tr key={"header"}>
                            {Object.keys(data[0]).map((key) => (
                                <th>{key}</th>
                            ))}
                        </tr> */}
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{data.id}</td>
                            <td>{data.email}</td>
                            <td> {data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>update / delete</td>
                        </tr> */}

                        {data.map((item) => (
                            <tr key={item.id}>
                                {Object.values(item).map((val) => (
                                    <td>{val}</td>
                                ))}
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>

            <Create fetchData={updateData} />

        </div>
    )
}
export default Userinfo;