import { useInput } from "@mui/base";
import React,{useState} from "react";


// Customize Hook
export const UseInput=(initialValue)=>{

    const[value,setValue]=useState(initialValue)

    const reset=()=>{
        setValue(initialValue);
    }
    const bind={
        value,
        onChange:(e)=>{
            setValue(e.target.value);
            }

    }

    return [value,bind,reset]
}


export default UseInput;