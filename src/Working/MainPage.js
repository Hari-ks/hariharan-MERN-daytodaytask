import React from "react";
import { CardMedia,Card } from '@mui/material';
//import HomePage from 'HomePage.avif'
import reactimage from './reactimage.png';


const MainPage=()=>{
    return(

        <Card sx={{ maxWidth: 1900 }}>
        <CardMedia
                sx={{ height: 750 }}
                image={reactimage}
                title="green iguana"
            />
            </Card>
    )
}

export default MainPage;

