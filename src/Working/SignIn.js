
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
import { Navigate, useNavigate,Link } from 'react-router-dom';
import SimpleSlide from './Slider';



// const formSchema = Yup.object({
//   title: Yup.string().required('Title is required'),
//   shortDescription: Yup.string().min(15, 'Need some extra line').required('Short Description is required'),
//   content: Yup.string().min(10,'Content minimum contains 100 words').required('Please enter a content'),
  // publishDate: Yup.date().required('Publish Date is Must...'),
  // category: Yup.number().required('Please select any Category'),
  // author: Yup.string(),
// })

const validate = values=>{
  
  const errors = {};
  if (!values.email) {
    errors.email = 'email is required';
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = 'Please enter Email format.';
      }
    if (!values.password) {
      errors.password = 'Password is required';
      }
     
   

              return errors
}

const SignInForm = () => {


    const naviget=useNavigate();
  const[alert,setAlert]=useState(false)
    const [inputData,setInputData]= useState()
    const [apiData,setApiData]=useState();
    const[isLogin,setIsLogin]=useState(false);

    const calldata=()=>{
        console.log('api Data',apiData)
        apiData.forEach(data => {
            debugger
            console.log(inputData)
            console.log(data)
            console.log(data.username)

            if(data.email==inputData.email && data.password==inputData.password )
            {
                console.log('successs')
                setIsLogin(true);
                setAlert(true)
                naviget('/home')
                    
            }
            setIsLogin(true)
        });
        if(isLogin){
           setIsLogin(true);
        }
    }

    useEffect(()=>{
       apiCall.get('users').then((res)=>res.data).then((data)=>setApiData(data)).catch((err)=>err)

    },[])

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
        
        setInputData(formValues)
        debugger
         calldata()
 
      console.log('Form values',formValues);
      console.log('testiggggggggggggggg')
      
    },
  });



  const handlebutton=()=>{
    debugger
    console.log(values)
  }
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
         {(isLogin)?<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Wrong Credential...!</Alert>
    </Stack>:null}
           {(alert)?<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Successfully submited...!</Alert>
    </Stack>:null}
        <Typography className='Heading' component="h1" variant="h4">
          SignIn 
        </Typography>
        <Box component="form"   onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
                value={values.email}
                onChange={handleChange('email')}
                helperText={(touched.email)?errors.email:null}
                onBlur={handleBlur}
              />
            </Grid>
            {/* {errors.title ?<span>Title is manditory..</span>:null} */}
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="family-name"
                value={values.shortDescription}
                onChange={handleChange('password')}
                helperText={(touched.password)?errors.password:null}
                onBlur={handleBlur}
              />
            </Grid>
           
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
     
    </FormControl>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtracontents" color="primary" />}
                label="Remember me."
              />
            </Grid>
            
          </Grid>
          <Link to="/signup">SignUp</Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={values.password === ''}
            // onSubmit={handleSubmit}
            
          >
            Submit
          </Button>
          
        </Box>
        
      </Box>
      <h5>Sample Credential</h5>
    <SimpleSlide/>
    </Container>
  );
}

export default SignInForm;