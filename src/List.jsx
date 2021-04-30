import React from 'react'
import ReactDOM from 'react-dom'

const arr = [{id : 101 , name : "tushar"},
            { id : 102 , name : " ritik"}]

const newArr = arr.map((num) => {
    console.log("num is:" , num)
    return <li key={arr.id} >{num * 20}</li>
})

export const List = () => {
    console.log("oldarr :" , arr)
    console.log("newarray :", newArr)
    return (
        <div>
            <ul>
                {newArr}
            </ul>

            
        </div>
    )
}
export default List
