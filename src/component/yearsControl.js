import {React ,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import "../App.css"
import { addaction, addnumaction, delaction, delnumaction} from "../Redux/Actions/ActionTypes";
const Years=()=>{
    const i1=useRef()
    const i2=useRef()
    const x1=useSelector(state => state.red1.x1)
    const dispatch=useDispatch()
    const add=()=>{
        addaction(dispatch)
    }
    const del=()=>{
        delaction(dispatch)
    }
    const addnumber=()=>{
        addnumaction(dispatch,i1.current.value)
    }
    const delnumber=()=>{
        delnumaction(dispatch,i2.current.value)
    }
    return(
        <div>
            <h1 className="title">Choose Your Birth Day</h1>
            <div className="year">
                <h1>{x1}</h1>
                <button onClick={add} className="btn">Add Year</button>
                <button onClick={del} className="btn">Delete Year</button>
                <div className="outadd">
                    <input type="number" placeholder="Enter the increment Number" ref={i1} />
                    <button className="addy" onClick={addnumber}>add</button>
                </div>
                <div className="outadd">
                    <input type="number" placeholder="Enter the decrement Number" ref={i2} />
                    <button className="addy" onClick={delnumber}>Delete</button>
                </div>
            </div>
        </div>
    )
}
export default Years;