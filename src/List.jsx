import React from 'react'
import ReactDOM from 'react-dom'

const arr = [{id : 101 , name : "tushar"},
            { id : 102 , name : " ritik"},
            {id : 103 , name : "ayushi"}]

const newArr = arr.map((e) => {
    // console.log("num is:" , num)
    return <li key={e.id} >user name is : {e.name}</li>
})

export const List = () => {
    // console.log("oldarr :" , arr)
    // console.log("newarray :", newArr)
    return (
        <div>
            <ul>
                {newArr}
            </ul>

            
        </div>
    )
}
export default List
