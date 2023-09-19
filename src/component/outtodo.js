import React from 'react'

const Outtodo = (props) => {
    return (
        <li>
            <p style={{
                textDecoration : props.item.complate? "line-through":"none",
                color: props.item.complate? "red":"black"}}
                onClick={props.itemcomplate}
            >{props.item.text}</p>
            <button onClick={props.itemdel}>x</button>
        </li>
    )
}

export default Outtodo
