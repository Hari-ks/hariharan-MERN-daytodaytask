import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { UserValue } from './useContext'


export const Component3 = () => {

    const value = useContext(UserValue)
    const [data, setData] = useState('New Data')


    return (<>
        <div>
            <h1>component3</h1>
            <h4> value : {value}</h4>

        </div>
    </>)

}

//// UseRef value
const UseRef = () => {

    const [value, setValue] = useState('')
    const refValue = useRef(0);
    const inputRef=useRef()

    useEffect(() => {
        refValue.current = refValue.current + 1

    })

    return (<>
        <h3>ref value : {refValue.current}</h3>
        <input  type='text' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={()=>console.log(inputRef.current.value)}>submit</button>
        <h4 ref={inputRef}>Some values</h4>

    </>)
}


export default UseRef;
