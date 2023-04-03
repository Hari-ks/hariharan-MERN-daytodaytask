import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import reactimage from './reactimage.png';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';    

 export function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
               //image={reactimage}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}


// export const PaginationSize=()=> {
//     return (
//       <Stack spacing={2}>
//         <Pagination count={10} size="large" />
//       </Stack>
//     );
//   }

const Conatiner = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url).then((res) => {
            console.log(res)
            return res.json();

        }).then((data) => setData(data))
    }, [])

    console.log(data)


    return (
        <>
        <div style={{height:"250px"}}>
        <Container  sx={{ height: 540 }}>
             
                
            <Card sx={{ maxWidth: "90%" }}>

                {
                    data.map((item, index) => {
                        return (<CardContent>
                            <CardMedia
                                sx={{ height: 140 }}
                               // image={reactimage}
                                title="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.body}
                            </Typography>
                        </CardContent>)
                    })
                }

            </Card>
           
      {/* <Pagination count={10} size="small" />
      <Pagination count={10} /> */}
     
    
        </Container>
        <Stack spacing={2}>

         <Pagination count={10} size="large" />
         </Stack>
         </div>
         </>
    );
}


export default Conatiner;
