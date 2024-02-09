import { Card, CardActionArea, CardContent, CardMedia, Typography,CardActions,Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../Components/Layout'
import {Menulist} from '../Data/Data'
import '../Styles/MenuStyle.css'

export const Menu = () => {
  return (
    <Layout>
    <Box className="card">
    

{

  Menulist.map(menu =>(


<Card className='menuard'>

  <CardActionArea>
    <CardMedia sx={{minHeight:"300px"}} component="img" src={menu.image} alt={menu.image}/>

  <CardContent>

    <Typography variant='h5' gutterBottom component='div'>
     { menu.name}
    </Typography>
    <Typography variant='body2' gutterBottom>
     { menu.description}
    </Typography>
  </CardContent>
  </CardActionArea>
</Card>

  ))
}


    </Box>
    
    </Layout>
  )
}
export default Menu

{/* 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={menu.name}
        height="140"
        src={menu.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {menu.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}