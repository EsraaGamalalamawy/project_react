import React from 'react'
import useAlert from './usealert'
import "../effect.css"

const Alerttap = () => {
    const [name,nameatt,namereset]=useAlert()
    const [age,ageatt,agereset]=useAlert()
    const [text,textatt,textreset]=useAlert()
    const handelsubmit=(e)=>{
        e.preventDefault()
        alert(`your name is : ${name} 
your age is : ${age} 
your message is : ${text}`)
        namereset()
        agereset()
        textreset()
    }
    return (
        <form onsubmit={handelsubmit} className='outform'>
            <input {...nameatt} placeholder='Enter your first name' />
            <input {...ageatt} placeholder='Enter Your age'/>
            <textarea {...textatt} placeholder='write your message'></textarea>
            <button onClick={handelsubmit} >send</button>
        </form>
    )
}

export default Alerttap
