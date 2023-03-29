import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import {CardContent,CardMedia} from '@mui/material';
import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import reactimage from './reactimage.png';
import article from './article.webp'

// import CardMedia from '@mui/material/CardMedia';

const ArticleCard = ({ id, title, body,onDelete }) => {
  //if (id % 2) throw 'Component Error';
  console.log('from article card',id,title)
  return (
    <>
    
    <Grid item xs={12} md={3}>
      <CardActionArea component="a" href="#">
        <Card className='articleCard' sx={{ display: 'flex',backgroundColor:'cornsilk'}}>
          <CardContent sx={{ flex: 1 }}>
          <CardMedia
                sx={{ height: 170, width:330 }}
                image={article}
                title="green iguana"
            />
            <Typography component="h2" variant="h5">
             <h5>Title : </h5> {title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography> */}
            <Typography variant="subtitle1" paragraph>
            <h4>Description : </h4> {body}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
            <Button onClick={onDelete}>
              <DeleteOutlinedIcon color='error' />
            </Button>
            {/* <Button >
              <UpdateIcon color='success' />
            </Button> */}
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
    </>
  );
}

export default ArticleCard;