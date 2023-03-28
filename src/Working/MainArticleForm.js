import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import apiCall from "../APIService/FormApi";
import './Style.css'
import { Link } from "react-router-dom";

const MainArticleForm=()=>{

    const [data,setData]=useState([]);
    const [error,setErrors]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        getAllData();
    },[])

    const getAllData=()=>{
        apiCall.get('/posts')
        .then(response=>{
            setData(response.data)
            console.log(response.data)
            }).catch((err)=>console.log(err))
    }


    const handleDelete=(id)=>{
        apiCall.delete(`/posts/${id}`).then((res)=>{
            
            console.log('delete succefuly');
            alert('Successfully')
            getAllData();

        }).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));
    }

    return(
        <>
        <div>
        <h1 className='alltitle'>All Titles</h1>
    </div>
         <Container className="mainFormContainer" maxWidth="1g" fixed={true}>
      {/* <h1>Home</h1>
      {
        error?.length > 0 ? <h1>Failed to fetch the data</h1> : null
      }
      {
        loading ? <h1>Fetching data. Please wait...</h1> : null
      } */}
      <Button className="addPostButton" >
        <Link to="/home/articleform" className="addPost"> Add Article</Link>
       
      </Button>
      <Grid container spacing={2}>
          {
            data.length > 0 ? (
              data.map((item) => (
                
                  <ArticleCard
                    id={item.id}
                    title={item.title}
                    body={item.shortDescription}
                   // handleDelete={item.handleDelete}
                    onDelete={() => handleDelete(item.id)}
                    // handleUpdate={() => updatePost(item.id)}
                    />
                
              ))
            ) : null
          }
      </Grid>
    </Container>
    </>
    )
}


export default MainArticleForm;





