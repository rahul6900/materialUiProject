import React from 'react'
import { Layout } from '../Components/Layout';
import { Link } from 'react-router-dom';
import bannerimg from '../img/banner.jpeg';
import '../Styles/Home.css'
import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
export const Home = () => {
  return (
    <Layout>
    <Typography variant='div' className='Home' style={{backgroundImage:`url(${bannerimg})`,backgroundSize:"100% 100%"}}>

<div className='headerContent'>
  <h1>Food Website</h1>
  <p>Best Food In India</p>
  <Link>
<button>Order Now</button>

  </Link>
</div>

    </Typography>
    

<Container className="foods">

<Grid container spacing={12} >
<Grid item  xs={12} md={4}>
<Box >

<Typography  variant='h5'>Grown Today, <br></br>Delivered Tomorrow</Typography>
  <p>Our organic fruit and vegetable are grown by farmers who use only natural fertilisers on their own land.</p>

</Box>

</Grid>
<Grid item  xs={12} md={4}>
<Box>

<Typography variant='h5'>Not Your Average <br></br> Grocery Delivery

</Typography>
  <p>Save yourself time, money and a bit of sanity with these easy and affordable grocery delivery services.</p>

</Box>

</Grid>
<Grid item  xs={12} md={4}>
<Box>

<Typography variant='h5'>Your Favorites on <br></br> Autopilot</Typography>
  <p>Put healthy eating on autopilot with mix the vegetables, fruits and other organic produce & clean ingredients</p>

</Box>

</Grid>

</Grid>



</Container>

    
    </Layout>
  )
}
export default Home;