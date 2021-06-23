import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Todo = () => {
    // const [IValue, setValue] = useState("");
    // const [data, setData] = useState([]);
    // const handleSubmit = () => {
    // //   debugger;
    //   let arraydata = [...data];
    //   arraydata.push(IValue);
    //   setData(arraydata);
    // };
    // return (
    //   <div className="App">
    //     <h1>Hello CodeSandbox</h1>
    //     <h2>Edit to see some magic happen!</h2>
    //     To-Do
    //     <input
    //       type="text"
    //       defaultValue={IValue}
    //       onChange={(e) => setValue(e.target.value)}
    //     />
    //     <button onClick={() => handleSubmit()}>submit</button>
    //     {data.map((value) => {
    //       return <span>{value}</span>;
    //     })}
    //   </div>
    // );

    const [value, setvalue] = useState()
    const [data, setdata] = useState([])

    const handleChange = () => {
        let newValue = [...data]
        newValue.push(value)
        setdata(newValue)

        // setvalue(value)
        console.log(value)
    }

    const removeItem = (id) => {
        let newValue = [...data]
        newValue.splice(id, 1);
        setdata(newValue);
        console.log(newValue)
    };


    return (
        <div className="w-50 m-3 m-auto" >
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>
                            <h1>Todo list</h1>
                            <p>add your task here</p>
                            <input
                                defaultValue={value}
                                onChange={(e) => { setvalue(e.target.value) }}
                                className="p-1" placeholder="add task here"
                            >
                            </input>
                            <button onClick={() => handleChange()}
                                className="btn btn-outline-success" > Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((value, idx) => {
                            return <tr><td>{value}</td><button onClick={() => removeItem(idx)}>remove</button>
                            </tr>

                        })}

                </tbody>
            </Table>
        </div>
    )
}

export default Todo
