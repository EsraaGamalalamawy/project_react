import {React, useState} from "react";
function Page2 (){
    const [car,setCar]=useState({
        name:""
    })
    const[r,setR]=useState([])
    const rand=()=>{
        setR([...r,Math.floor(Math.random()*100)])
    }
    const style1={
        display: "flex",
        justifyContent: "space-around",
    }
    const style2={
        width:"48%"
    }
    return(
        <div>
            <h1 className="title">Input & Rundom</h1>
        <div className="main" style={style1}>
            <div style={style2}> 
                <input type='text' placeholder='enter your name' className='inp' value={car.name} onChange={(e)=>{
                    setCar({...car,name : e.target.value})
                }}></input>
                <h2> the name is : {car.name}</h2>
            </div>
            
            <div style={style2}>
                <button className='add' onClick={rand}>rundom number</button>
                <ol>
                    {r.map((el)=> <li> {el}</li>)}
                </ol>
            </div>
        </div>
        </div>
    )
}
export default Page2;