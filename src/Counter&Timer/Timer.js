
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Timer =()=>{


    const[count,setCount]= useState(0);
    const[value,setValue]= useState(0);
  

   

    const handleStart=()=>{
        debugger
        setCount(value)
       
       
    }



    useEffect(()=>{
        
        if(count>0){
            setTimeout(() => {
                setCount(count-1)
            }, 1000);
        }
        

    },[count])

    const handleClear=()=>{
        
        setValue(0)
        setCount(0);
        
    }

    const handleInput=(e)=>{
        setValue(e.target.value);
    }

    return(
        <>
        <div className="new-timer" style={{alignItems:"center",marginLeft:"40%",marginTop:"10%"}}>
        <h1 >Timer</h1>
        <input type="number" value={value}  onChange={handleInput}/>

        <button onClick={handleStart} disabled={(count>0)?true:false} style={(count>0)?{opacity:"0.6",cursor:"not-allowed"}:{backgroundColor:"green"}}>Start</button>
        <button onClick={handleClear} style={{backgroundColor:"silver"}}>Clear</button>
        <h1>{count}</h1>
        <br/>
        {/* <Link to="/counter">Counter</Link><br/>
        <Link to="/">Home</Link> */}
        </div>
        </>
    )
}

export default Timer;




