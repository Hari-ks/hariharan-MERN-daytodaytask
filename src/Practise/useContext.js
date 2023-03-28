import React from "react";
import { useContext } from "react";
import { useState,createContext } from "react";
import Component3 from "./OtherComponent";


export const UserValue=createContext();
export const NewContext=createContext();

export const Context =()=>{

    const [value,setValue] = useState('HariHaran');
   // setValue('HariHaran')

    return(<>
    <div>
        <h1>Main Component</h1>
    </div>
    <UserValue.Provider value={value}>
        <Component2/>
        </UserValue.Provider>
        
    </>)
}


 const Component2=()=>{

    return(<>
    <h3>component 2</h3>
    <Component3/>
    </>)
}

//  const Component4=()=>{

//     const value =useContext(UserContext)

//     return(<>
//     <h3>component 2</h3>
//     <h3>Name : {value} </h3>
//     </>)
// }


 export default Context;
