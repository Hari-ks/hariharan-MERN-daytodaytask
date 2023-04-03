import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Handshake, Label } from '@mui/icons-material';
import * as Yup from 'yup';
import { Form, useFormik } from 'formik';
import { Stack, Alert } from '@mui/material';
import { useState } from 'react';
import apiCall from '../APIService/FormApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const validate = values => {

  const errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.shortDescription) {
    errors.shortDescription = 'Short Description is required';
  }
  else if (values.shortDescription.length < 10) {
    errors.shortDescription = 'Minimum 10 letters required...';
  }
  else if (values.shortDescription.length > 15) {
    errors.shortDescription = 'Maximum 20 letters only...'
  }
  if (!values.content) {
    errors.content = 'Content is required';
  }
  else if (values.content.length < 30) {
    errors.content = 'Minimum letters 30 letters required...';
  }
  if (!values.publishDate) {
    errors.publishDate = 'Publish Date is Must...';
  }
  if (!values.category) {
    errors.category = 'Please select any Category';
  }
  if (!values.author) {
    errors.author = 'Author is required';
  }

  return errors
}

const ArticleForm = () => {

  const [InputData, setInputData] = useState()
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {},
    validate,
    onSubmit: (formValues) => {

      debugger
      formValues.id = (Math.floor(Math.random() * 2000)).toString()
      setInputData(formValues)
      console.log(formValues)
      apiCall.post('/posts', formValues)
        .then((res) => {
          setAlert(true);
          navigate('/home/mainform')

        })
        .catch((err) => console.log('error', err))
      setAlert(true);
      navigate('/home/mainform')
      console.log('Form values', formValues);


    },
  });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {(alert) ? <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Successfully new Article submited...!</Alert>
        </Stack> : null}
        <Typography className='Heading' component="h1" variant="h4">
          Article Entry Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                value={values.title}
                onChange={handleChange('title')}
                helperText={(touched.title) ? errors.title : null}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                id="shortDescription"
                label="Short Desciption"
                name="shortDescription"
                autoComplete="family-name"
                value={values.shortDescription}
                onChange={handleChange('shortDescription')}
                helperText={(touched.shortDescription) ? errors.shortDescription : null}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={20} flexWrap={100}>
              <TextField
                required
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                value={values.content}
                onChange={handleChange('content')}
                helperText={(touched.content) ? errors.content : null}
                onBlur={handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="author"
                id="author"
                label="Author"
                value={values.author}
                onChange={handleChange('author')}
                helperText={(touched.author) ? errors.author : null}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <h5>Publish Date</h5> <TextField
                required
                fullWidth
                type="date"
                name="publishDate"
                id="publishDate"
                value={values.publishDate}
                onChange={handleChange('publishDate')}
                helperText={(touched.publishDate) ? errors.publishDate : null}
                onBlur={handleBlur}
              />
            </Grid>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="category" name="category">Catgory</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={values.category}
                label="Category"
                name="category"
                onChange={handleChange('category')}
                helperText={(touched.category) ? errors.category : null}
                onBlur={handleBlur}
                displayEmpty
              >

                <MenuItem value={'Technology'}>Technology</MenuItem>
                <MenuItem value={'Food'}>Food</MenuItem>
                <MenuItem value={'Travel'}>Travel</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtracontents" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via content."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={values.password === ''}
            onSubmit={handleSubmit}

          >
            Submit
          </Button>

        </Box>

      </Box>

    </Container>
  );
}

export default ArticleForm;
