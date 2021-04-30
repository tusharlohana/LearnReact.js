// form : (i) Controlled by react
                    // ---> const [state, setstate] = useState(initialState)
//         (ii) Uncontrolled bt react 
                    // --> const ref = useRef(initialValue)


import React , {useState  } from 'react'

 const Forms = () => {

    const [value, setvalue] = useState(" ")

    const handleChange = (e)=>{
        // console.log()
        setvalue(e.target.value)
    }   

    return (
        <div>
            <form>

             <h1>Controlled form</h1>

            <input type="text" value={value} onChange={handleChange} ></input>

            </form>
        </div>
    )
}
export default Forms