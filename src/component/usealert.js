import {useState} from 'react'

const useAlert = (x) => {
    const [value,setValue]=useState(x)
    const reset=()=>{
        setValue(x)
    }
    const att={
        value,
        type:"text",
        onChange:(e)=> {setValue(e.currentTarget.value)}
    }
    return[value, att, reset]
}

export default useAlert
