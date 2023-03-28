 import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {Box,MenuItem ,FormControl ,Select,InputLabel  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Handshake, Label } from '@mui/icons-material';
// import { useState } from 'react';
import * as Yup from 'yup';
import { Form, useFormik } from 'formik';
import {Stack,Alert} from '@mui/material';
import { useState } from 'react';
import apiCall from '../APIService/FormApi';
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';



// const formSchema = Yup.object({
//   title: Yup.string().required('Title is required'),
//   shortDescription: Yup.string().min(15, 'Need some extra line').required('Short Description is required'),
//   content: Yup.string().min(10,'Content minimum contains 100 words').required('Please enter a content'),
  // publishDate: Yup.date().required('Publish Date is Must...'),
  // category: Yup.number().required('Please select any Category'),
  // author: Yup.string(),
// })

const validate = values=>{
  
    debugger
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'firstname is required';
    }
if(!values.lastname){
    errors.lastname = 'lastname is required';
}
    if (!values.email) {
      errors.email = 'Email is required';
      }
      else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = 'Please enter Email format.';
      }
    //   if (!values.password) {
    //     errors.password = 'Password is required';
    //     }
    //     else if(values.content.length<8){
    //       errors.password = 'Password minimum contains 8 letters';
    //     }
       if(!values.confirmpassword){
        errors.confirmpassword = 'Confirm Password is required';
       }
      if(values.password !== values.confirmpassword)
      {
        errors.confirmpassword = 'Password and Confirm Password are not same';
      }

              return errors
}

const SignUp = () => {


    const navigate=useNavigate();
  const[data,setData]=useState()
  const[alert,setAlert]=useState(false)
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {},
   // validateOnChange: false,
    validate,
   //validationSchema: formSchema,
    onSubmit: (formValues) => {
        formValues.id=Math.floor(Math.random()*2000)
      setData(formValues)
      apiCall.post('/users',data)
      .then((res)=>{console.log('successs')
      setAlert(true)
        navigate('/home')
    
    })
      .catch((err)=>console.log('error',err))
      
      console.log('Form values',formValues);
      console.log('testiggggggggggggggg')
      
      
    },
  });

 useEffect(()=>{
      
 },[])
  


  // const formik=useFormik({
  //   initialValues :{

  //   },

  // });

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
          <LockOutlinedIcon />
         </Avatar>
           {(alert)?<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Successfully submited...!</Alert>
    </Stack>:null}
        <Typography className='Heading' component="h1" variant="h4">
          SignUp
        </Typography>
        <Box component="form"   onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="firstname"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
                value={values.firstname}
                onChange={handleChange('firstname')}
                helperText={(touched.firstname)?errors.firstname:null}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="lastname"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                autoFocus
                value={values.lastname}
                onChange={handleChange('lastname')}
                helperText={(touched.lastname)?errors.lastname:null}
                onBlur={handleBlur}
              />
            </Grid>
            
            {/* {errors.title ?<span>Title is manditory..</span>:null} */}
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="family-name"
                value={values.email}
                onChange={handleChange('email')}
                helperText={(touched.email)?errors.email:null}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={20} flexWrap={100}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                value={values.content}
                onChange={handleChange('password')}
                helperText={(touched.password)?errors.password:null}
                onBlur={handleBlur}
              />
            </Grid>
   
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                //autoComplete="password"
                name="confirmpassword"
                id="confirmpassword"
                label="Cornfirm Password"
                value={values.confirmpassword}
                onChange={handleChange('confirmpassword')}
                helperText={(touched.confirmpassword)?errors.confirmpassword:null}
                onBlur={handleBlur}
              />
            </Grid>
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      
    </FormControl>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtracontents" color="primary" />}
                label="Remember."
              />
            </Grid>
            <Link to="/signin">SignIn</Link>
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

export default SignUp;