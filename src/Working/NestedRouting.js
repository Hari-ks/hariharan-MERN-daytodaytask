


import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedRouting =()=>{

    return(<>
        <div className="nested-route">
            <div >
                <Link className="nestedMenuLink" to='/home/nestedRout/task/'>1st Week Task</Link>
                <Link className="nestedMenuLink" to='/home/nestedRout/content1'>Content 1</Link>
                <Link className="nestedMenuLink" to='/home/nestedRout/content2'>Content 2</Link>
                
            </div>
        </div>
        <div><Outlet/></div>
        </>
    )
}

export default NestedRouting;


