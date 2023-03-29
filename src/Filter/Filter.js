import { useState } from "react";
import { Link } from "react-router-dom";
import DrawerAppBar from "../Working/HomePage";
import './Filter.css';


export const FilterList = () => {

    const [input, setInput] = useState('');
    // const [data, setData] = useState([]);

    const [addDetails, setAddDetails] = useState({})
    const [details, setDetails] = useState([

        {
            id: 0,
            name: ['hari'],
            department: 'Computer Science',
            degree: 'BCA',
            doj: '	2023-03-10'
        },
        {
            id: 1,
            name: ['navin'],
            department: 'BCA',
            degree: 'Computer Science',
            doj: '	2023-03-10'
        },
        {
            id: 2,
            name: ['deva'],
            department: 'Engineering',
            degree: 'Mechanical Engineering',
            doj: '	2023-03-10'
        },
        {
            id: 3,
            name: ['praveen'],
            department: 'Engineering',
            degree: 'Mechanical Engineering',
            doj: '	2023-03-10'
        }
    ])


    // const inputChange = (e) => {
    //   setInput([e.target.value])
    // }

    // const handleChange = () => {
    //   setData([...data, input]);
    //   console.log(data)

    //   setInput('')
    // }
    const OnFilter = (i) => {
        console.log(i, "input chnage");
        setInput(i)
        const filteredData = details.filter(values => values.name[0].includes(i))

        console.log(filteredData, 'filteredData')
        setDetails(filteredData);
    }

    const OnDelete = (i) => {
        const filterData = details.filter((d, index) => index !== i);
        setDetails(filterData);
    }

    //get value from form...
    // const handleGetFormData = (detail) => {

    //     const values = detail
    //     setDetails([values])

    //     console.log(detail, 'formdata from form value got')
    //     console.log(details)
    // }


    const AddValue = (e) => {

        setAddDetails({ ...addDetails, [e.target.name]: [e.target.value] })
    }
    const onAddValue = (e) => {
        e.preventDefault();
        console.log(addDetails)

        setDetails([...details, addDetails])
        console.log(details)
    }

    return (
        <>
        <div>
            {/* <DrawerAppBar/> */}
        </div>
            <div className='Container' style={{marginLeft:"20%",marginTop:"10%"}}>
                <input
                    type="text"
                    placeholder="Name"
                    style={{marginLeft:"60%"}}
                    value={input}
                    onChange={(e) => OnFilter(e.target.value)} />
                
                <h3></h3>
                <br />
                <form>
                    <table>
                        <thead><tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Degree</th>
                            <th>DOJ</th>
                        </tr></thead>
                        <tbody>
                            {
                                details.map((dt, i) => {
                                    return (<><tr key={i}>
                                        <td>{dt.id}</td>
                                        <td>{dt.name}</td>
                                        <td>{dt.department}</td>
                                        <td>{dt.degree}</td><td>{dt.doj}</td><td><button onClick={(e) => {
                                            e.preventDefault();
                                            OnDelete(i)
                                        }} style={{backgroundColor:"grey"}}>delete</button></td></tr>

                                    </>)
                                })
                            }
                            <tr key='100'><td><input type="number" name='id' onChange={AddValue} /></td><td><input type="text" name='name' onChange={AddValue} /></td><td><input type="text" name='department' onChange={AddValue} /></td><td><input type="text" name='degree' onChange={AddValue} /></td>
                                <td><input type="date" name='doj' onChange={AddValue} /></td><td><button onClick={(e) => onAddValue(e)} style={{backgroundColor:"lightgreen"}}>Add</button></td></tr>
    
                        </tbody>

                    </table>

                </form>
                {/* <Link to="/">Home</Link> */}
            </div>
            
           
            <div className='form'>

            </div>
            
        </>
    );
}

export default FilterList;




