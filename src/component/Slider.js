import {React,useState,useRef,useEffect} from "react"
import "../slider.css"
import { motion } from "framer-motion"
import Images from "./images"

const Slider = () => {
    const x=useRef()
    const [width,setWidth]=useState(0)
    useEffect(()=>{
        setWidth(x.current.scrollWidth - x.current.offsetWidth)
        return
    },[])
    return (
        <motion.div className='slider' whileTap={{cursor:"grabbing"}}>
            <motion.div drag="x" className="outslider" dragConstraints={{right:0,left:-width}} ref={x} >
                {Images.map((e)=>(
                    <motion.div className="image" key={e}>
                        <img src={e} alt="img" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider
