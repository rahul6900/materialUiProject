import { MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import '../Styles/ContactStyle.css';
import Layout from '../Components/Layout';
import '../Styles/index.css'


const homePageStyle = (theme) => ({
  root: {
    width: "300px"
  },
  selected: {
    backgroundColor: "turquoise !important",
    color: "white",
    fontWeight: 600
  }
});

export const Contact = () => {

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
 
  return (

    <Layout>
    <Box className="contactbox">
<Typography variant='h4'>

Contact My Restaurant

</Typography>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet ipsum id purus bibendum efficitur. Nunc vitae tellus pulvinar lorem porta cursus. Ut sed tellus sagittis, tempor eros ut, luctus ipsum. Aliquam erat volutpat. Nam tortor felis, lobortis at arcu id, tincidunt condimentum nulla. Cras nulla leo, efficitur eu sapien viverra, consectetur dignissim magna. Nullam vitae neque a velit sollicitudin vulputate vel et lectus. </p>

    </Box>
    <Box className="contacbox2">
<TableContainer component={Paper}>
<Table aria-label="spanning table">
<TableHead>

  <TableRow>
<TableCell className='rahulc' sx={{bgcolor:"black",color:"white"}} align='center'>Contact Details</TableCell>

  </TableRow>
</TableHead>
<TableBody>
<TableRow>
 <TableCell className='iconstable'>  <SupportAgentIcon/>1800 00 00 00 (Tolfree)</TableCell>
 </TableRow>
  <TableRow>
 <TableCell className='iconstable'>  <SupportAgentIcon/>1234567890 (Tolfree)</TableCell>
 </TableRow>
 <TableRow>
 <TableCell className='iconstable'>  <EmailIcon/>mywebsit@gmail.com</TableCell>
 </TableRow>

</TableBody>
</Table>


</TableContainer>


    </Box>
    <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          // helperText="Please select your currency"
          variant="standard"
          
          sx={{width:"100%"}}
        >
          {currencies.map((option) => (
            <MenuItem  className='s' 
  
            key={option.value} value={option.value}>
              {option.label}
              
            </MenuItem>
          ))}
        </TextField>
    </Layout>

  )
}
export default Contact