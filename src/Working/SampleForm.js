import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Container } from '@mui/material';
import { InputLabel  } from '@mui/material'

const ariaLabel = { 'aria-label': 'description' };

const FormInput=()=> {
  return (
    <>
    <div>
        <h1>Article Entry Form</h1>
    </div>
    <Container>
        
      {/* <Input defaultValue="Hello world" inputProps={ariaLabel} /> */}
       <InputLabel htmlFor="my-input">Name</InputLabel>
       <Input placeholder="Name" inputProps={ariaLabel} />
       <InputLabel htmlFor="my-input">Title</InputLabel>
       <Input placeholder="Title" inputProps={ariaLabel} />
      {/* <Input disabled defaultValue="Disabled" inputProps={ariaLabel} /> */}
      {/* <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
   </Container>
   </>
  );
}

export default FormInput;

