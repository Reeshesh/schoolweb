import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'

function FeedbackForm() {
  return (
    <div className='bg-white'>
        <Container>
          <Box sx={{ py: '1.4rem'}}>
            <TextField fullWidth id="outlined-basic" label="Send us a feedback" variant="outlined" />
            <Grid container spacing={2} sx={{ mt: '0.25rem'}}>
              <Grid item xs={6}>
                <Button variant="outlined" fullWidth sx={{color: '#272727', py: '0.6rem'}}>Gallery</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth sx={{ py: '0.6rem'}}>Submit</Button> 
              </Grid>              
            </Grid>
          </Box>            
        </Container>
    </div>
  )
}

export default FeedbackForm