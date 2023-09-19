import {React, useState , useEffect,useRef} from 'react'
import "../index.css"

const Code2=()=>{
    const[num,setNum]=useState(0)
    const x=useRef(null)


    useEffect(()=>{
            x.current=setInterval(()=>{
                setNum((a)=>a+1)
            },1000)
        return()=>{
            clearInterval(x.current)
        }
    },[])
    const reset=()=>{
        setNum(0)
        clearInterval(x.current)
        x.current=setInterval(()=>{
            setNum((a)=>a+1)
        },1000)
    }

    return(
        <div>
            <h2>
                time is :{Math.floor(num/3600)} <small>HR</small> {Math.floor(num/60)} <small>MIN</small> {num}<small> SEC</small> 
            </h2>
            <button className="add" onClick={()=> clearInterval(x.current)}>stop</button>
            <button className="add" onClick={reset}>reset</button>
        </div>
    ) 

}
export default Code2;