
import React, { useState } from "react"
//import { FilterList } from "../index"
import FilterList from "./Filter"

const EntryForm = (props) => {

    const initialValue = {
        id: null,
        name: '',
        department: '',
        degree: '',
        doj: ''
    }
    const [detail, setDetail] = useState(initialValue)

    const inputChange = (e) => {
       // props.handleGetFormData(e)
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    // console.log(data)
    const [submite, setSubmit] = useState(false)

    function handleChange(e){
        e.preventDefault();
        debugger
        console.log(detail)
        // FilterList(details)
        props.handleGetFormData(detail)
    }
  

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={(e)=>handleChange(e) }>
                ID: <input type="number" name="id" onChange={inputChange} />
                Name: <input type="text" name="name" onChange={inputChange} />
                Department: <input type="text" name="department" onChange={inputChange} />
                Degree: <input type="text" name="degree" onChange={inputChange} />
                DOJ: <input type="date" name="doj" onChange={inputChange} />
                <br />
                <br />
                <button type="submite" >Submit</button>
            </form>{
                //    (submite) ? (<FilterList data={details}/>):null
            }
            {/* <FilterList data={details}/> */}
        </>
    )
}


export default EntryForm;