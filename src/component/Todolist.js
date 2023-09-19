import {React,useState,useRef} from 'react'
import "../todolist.css"
import Outtodo from './outtodo'

const Todolist = () => {
    const x=useRef()
    const [text,setText]=useState("");
    const [id,setId]=useState(0);
    let [result,setResult]=useState([]);
    const [show,setShow]=useState("all")
    const [complateall,setComplateall]=useState("true")
    const change=(e)=>{
        e.preventDefault()
        setId(id+1)
        onsubmit({
            id,
            text,
            complate:false
        })
        setText("")
    }
    const onsubmit=(obj)=>{
        setResult([...result, obj])
    }
    const delate=(element)=>{
        setResult(result.filter((x)=> x.id!==element))
    }
    const toshow=(s)=>{
        setShow(s)
    }
    if(show==="active"){
        console.log(`toshow is :${show}`)
        result = result.filter((e)=> !e.complate)
    }
    else if(show==="complate"){
        console.log(`toshow is: ${show}`)
        result = result.filter((e)=> e.complate)
    }
    const done=(item)=>{
            item.complate = !item.complate
    }
    const togglecomplate=()=>{
        setComplateall(!complateall)
        setResult(result.map((element)=>{
            return{
                ...element,
                complate:complateall
            }
        }))
    }
    return (
        <>
            <div className='todolist'>
                <form onSubmit={change}>
                    <input type='text' placeholder='Enter your Item' ref={x} value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button onClick={change}>Add</button>
                </form>
                <div className={result.length===0? "result1":"result2"}>
                    <ul>
                        {result.map((item)=>(
                            <Outtodo 
                                key={item.id}
                                item={item}
                                itemcomplate={()=>done(item)}
                                itemdel={()=> delate(item.id)}
                            />
                        ))}
                    </ul>
                </div>
                <div className='one'>
                    <button onClick={()=>toshow("all")} >All</button>
                    <button onClick={()=>toshow("active")} >Active</button>
                    <button onClick={()=>toshow("complate")} >Complate</button>
                </div>
                <button className={result.length!==0? "":"del"} onClick={()=> setResult(result.filter((e)=> !e.complate))}>delate all Complate</button>
                <button onClick={()=>togglecomplate()}>toggle all Complate : {`${complateall}`}</button>
            </div>
        </>
        
    )
}

export default Todolist
