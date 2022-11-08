import React from 'react'
import { Avatar, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Container } from '@mui/system';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} role={undefined} />
  ));

const buttonStyles ={
    button: {
        position: 'relative',
        width: '50ch',
        height: '60px',
        borderRadius: '99px',
        textTransform: 'none',
        background: 'linear-gradient(to left, #226CE0, #FFFAFF 124.45%)',
        boxShadow: 0,
        bottom: '-25ch',
    },
};

const HomePage = () => {
  return (
    <div align='center'>
        <Container>
            <Avatar variant='square' src="" alt="School Logo" />
            <Typography sx={{fontWeight: 600}}> Welcome Back! </Typography>
            <Typography sx={{fontWeight: 400}}> Select your Role to continue </Typography>
           
            <Button variant='contained' sx={buttonStyles.button} component={RouterLink} to="/studentlogin"> Student </Button>
           
            <Button variant='contained' sx={buttonStyles.button}> Teacher </Button>
            
        </Container>
    </div>
  )
}

export default HomePage