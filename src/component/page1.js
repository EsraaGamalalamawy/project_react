import {React, useState } from 'react'
import Code from './move'
import "../App.css"
import Img1 from "../images/download.jpg"
import Img2 from "../images/sony.jpg"
import Img3 from "../images/realme.png"
import Img4 from "../images/shawmy.webp"

function Page1() {
    const[ x , setx ]=useState(0);
    const[y1,sety1]=useState(false)
    const[y2,sety2]=useState(false)
    const[y3,sety3]=useState(false)
    const[y4,sety4]=useState(false)
    const[z1,setz1]=useState(0)
    const[z2,setz2]=useState(0)
    const[z3,setz3]=useState(0)
    const[z4,setz4]=useState(0)


    const add1=function(){
        sety1(true)
        setx(x+200)
        setz1(z1+1) 
    }
    const add2=function(){
        sety2(true)
        setx(x+300)
        setz2(z2+1)
    }
    const add3=function(){
        sety3(true)
        setx(x+100)
        setz3(z3+1)
    }
    const add4=function(){
        sety4(true)
        setx(x+500)
        setz4(z4+1)
    }
    

    return (
        <div >
        <h1 className='title'>Shopping</h1>
        <div className="main">
            <div className='main2'>
            <div className='out'>
                <img className='imagephone' src={Img1} alt='image1' />
                <Code name="Samsung" price="200$"  />
                <button className="add" onClick={add1}>add</button>
                <div>
                <h3 className={y1 ? "point" : "pointnum"}>{z1}</h3>
            </div>
            </div>

            <div className='out'>
                <img className='imagephone' src={Img2} alt='image2' />
                <Code name="sony" price="300$"  />
                <button className="add" onClick={add2}>add</button>
                <div>
                <h3 className={y2 ? "point" : "pointnum"}>{z2}</h3>
            </div>
            </div>

            <div className='out'>
                <img className='imagephone' src={Img3} alt='image3' />
                <Code name="realme" price="100$"  />
                <button className="add" onClick={add3}>add</button>
                <div>
                <h3 className={y3 ? "point" : "pointnum"}>{z3}</h3>
            </div>
            </div>

            <div className='out'>
                <img className='imagephone' src={Img4} alt='image4' />
                <Code name="shawmy" price="500$"  />
                <button className="add" onClick={add4}>add</button>
                <div>
                <h3 className={y4 ? "point" : "pointnum"}>{z4}</h3>
                </div>
            </div>
            </div>
            <div className='output'>
            {
                x
            }
            </div>
        </div>
        
        </div>
    )}

    export default Page1;
