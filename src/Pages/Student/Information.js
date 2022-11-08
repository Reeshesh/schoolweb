import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Grid, Avatar, Container, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComponentHeader from '../../Components/Common/ComponentHeader'

const cardStyles ={
  card: {
      bgcolor: '#fff',
      my: '0.5rem', 
      padding: '15px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
  },
};

const Information = () => {

  const [city, setcity] = useState([])

  useEffect(() => {
    console.log(process.env);
    axios.get(`${process.env.REACT_APP_base_URL}/Student/Information`)
    .then(response => {
      setcity(response.data);
      console.log(response.data);
    })
    .catch(error => {
      setcity(null);
    })
  },[]);
  
  return (
    <div>
        <ComponentHeader title='Information'/>
        <Container>
          <Grid sx={cardStyles.card}>   
            <Avatar sx={{ width: '89px', height: '89px', border: '3px solid #226CE0' }} src="https://avatars.githubusercontent.com/u/86892846?v=4" alt="" />
            <Typography sx={{lineHeight: '75px', fontWeight: 600}}> SHIKHAR POKHAREL </Typography>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          sx={{ background: 'rgba(1, 229, 240, 0.3)', borderRadius: '4px'}}
        >
          <Typography> Permanent Address </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Province: </Typography>
          <Typography> District: </Typography>
          <Typography> Province: </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          sx={{ background: 'rgba(1, 229, 240, 0.3)', borderRadius: '4px'}}
        >
          <Typography> Temporary Address </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Province: </Typography>
          <Typography> District: </Typography>
          <Typography> Province: </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Container>
    </div>
  )
}

export default Information