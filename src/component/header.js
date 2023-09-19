import React from "react";
import { NavLink } from "react-router-dom";
function Header (){
    const style=({isActive})=>{
        return{
            color:isActive? "#bca6e0":"rgb(64 33 115)",
            textDecoration:isActive? "underline":"none"
        }
    }
    return(
            <nav>
                <NavLink to="/Page1" style={style} > React1 </NavLink>
                <NavLink to="/Page2" style={style}> React2 </NavLink>
                <NavLink to="/Page3" style={style}> React3 </NavLink>
                <NavLink to="/bs" style={style}> Bootstrap </NavLink>
                <NavLink to="/effect" style={style}> Effect </NavLink>
                <NavLink to="/alert" style={style}> Alert </NavLink>
                <NavLink to="/redux" style={style}> Redux </NavLink>
                <NavLink to="/todolist" style={style}> Todolist </NavLink>
                <NavLink to="/slider" style={style}> Slider </NavLink>
            </nav>
    )
}
export default Header;