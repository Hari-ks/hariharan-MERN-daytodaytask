import React from "react";
import { useContext,useState } from "react";
import {UserValue} from './useContext'


export const Component3=()=>{

    const value=useContext(UserValue)
    const [data,setData]= useState('New Data')


return(<>
        <div>
        <h1>component3</h1>
        <h4> value : {value}</h4>
      
        </div>
</>)

}


export default Component3;
