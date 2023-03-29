
import React from "react";
//import { useState } from "react";
import useInput from "./UseInput";


const Normal =()=>{

    //const[firstNames,setFirstName]=useState('');

    const [firstName,bindFirstName,reset]=useInput('');
    const handleChange=()=>{
        alert(`FisrtName: ${firstName}`);
        reset()
    }

    return(<>
    <label>FirstName</label>
    <input type='text' {...bindFirstName}/>
    <button onClick={handleChange}>submit</button>
    <button onClick={reset}>Clear</button>
    </>)
}

export default Normal;

