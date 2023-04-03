
import React from "react";

// this is Creation of Higher Order Component
const HigherOrderCommponent =(Component)=>{

    const NewComponent=(props)=>{
        console.log('props',props)
        return(<div style={{border:'2%'}}>
            <h3>HOC Component</h3>
            
            <Component {...props}/>
        </div>)
    }
    return NewComponent;
}


export  default HigherOrderCommponent