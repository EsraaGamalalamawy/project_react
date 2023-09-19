import {React,useState, useEffect} from 'react'
import "../effect.css"
import axios from 'axios'

const Effect = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    useEffect(()=>{
        const move=(e)=>{
            setX(e.clientX)
            setY(e.clientY)
        }
        document.onmousemove=move
    },[])

    const [ax,setAx]=useState([])
    const [ax2,setAx2]=useState({})
    const [id,setId]=useState(0)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((re)=>{
            setAx(re.data)
            console.log(re.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((re)=>{
            setAx2(re.data)
        }).catch((error)=>{
            console.log(error)
        })
    })

    return (
        <div>
            <div className='outeffect'>
                <h1>x-axis ={x}</h1>
                <h1>y-axis ={y}</h1>
            </div>
            <div className='fetch'>
                <ol className='data1'>
                    { ax.map((e)=>(
                    <li key={e.id}>{e.title}</li>
                    ))}
                </ol>
                <div className='data2'>
                    <input type='text' placeholder='Enter Id Number'
                    
                    onChange={(e)=>setId(e.target.value)} />
                    <h3>{ax2.title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Effect
