
import React from "react";
import { Link, Outlet } from "react-router-dom";

const TaskFile =()=>{

    return(<>
        <div className="task-file">
            <div >
                <Link className="taskMenuLink" to='/home/task/counter'>Counter</Link>
                <Link className="taskMenuLink" to='/home/task/filter'>Filter</Link>
                
            </div>
        </div>
        <div><Outlet/></div>
        </>
    )
}

export default TaskFile;


