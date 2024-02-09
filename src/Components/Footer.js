import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'
import { Link,NavLink } from "react-router-dom";
import '../Styles/FooterStyle.css'

export const Footer = () => {
  return (


    <>

<Box className='footer' >

<Container className='Footercon'>
<Grid container >
<Grid item xs={12} sm={4}>
<Typography variant='h5'> MY Restaurant</Typography>
<p>Online grocery shopping and delivery<br></br>
at Groffer. Buy fruits, bread, vegetables.</p>

</Grid>
<Grid item xs={12} sm={4} className="listn">
<ul>
  <li>   <NavLink to="/">Home</NavLink></li>
  <li>   <NavLink to="/about">About</NavLink></li>
  <li>  <NavLink to="/contact">Contact</NavLink></li>
  <li>   <NavLink to="/menu">Menu</NavLink></li>
</ul>

</Grid>
<Grid item xs={12} sm={4}>
<Box className="icons">

<InstagramIcon/>
<TwitterIcon/>
<GitHubIcon/>
<YouTubeIcon/>
</Box>

</Grid>

</Grid>



</Container>




<Divider sx={{bgcolor:"white",margin:"3%"}} />

<Typography variant='h5' className='allright'>

  All Rights Reserved &copy;
</Typography>




</Box>





    </>
  )
}
export default Footer;