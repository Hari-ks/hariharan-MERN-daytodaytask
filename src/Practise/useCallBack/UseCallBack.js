
import React, { useState,useCallback,memo, useEffect } from "react";

const UseCallBack=()=>{

    const[value,setValue]=useState(null)
    const[count,setCount]=useState(null)

    const increament=useCallback(()=>{
      return  setValue(value+1)
    },[value])
   
    return(
        <>
        <div>
            Count : { value}

            <input type='number' onChange={(e)=> setCount(e.target.value)}/>
            <Normal increament={increament}/>
        </div>
        </>
    )
}



export const Normal = memo((props)=>{

    useEffect(()=>{
        console.log('updatingg')
    })
   
    return(
        <button onClick={props.increament}> Button</button>
        )
}
)

export default UseCallBack;

