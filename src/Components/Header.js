
import React,{useState} from "react";
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import logo from '../img/logo.svg'

import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink } from "react-router-dom";
import "../Styles/HeaderStyle.css";


export const Header = () => {

const [state,setstate]=useState(false);

//toggle menu

const HandlerToggle = ()=>{

setstate(!state)


}


const drawer = (

<Box onClick={HandlerToggle} sx={{textAlign:'center'}}>

<Typography color={"goldenrod"} variant="h6" component='div' sx={{flexGrow:1,marginTop:"10%",marginBottom:"10%"}}> 
<img src={logo} height='70' width="200"/>
</Typography>
<Divider ></Divider>

<ul className="Mobile-menu">

<li>
    <NavLink  to="/">Home</NavLink>
</li>
<li>
    <NavLink to="/about">About</NavLink>
</li>

<li>
    <NavLink to="/contact">Contact</NavLink>
</li>

<li>
    <NavLink to="/menu">Menu</NavLink>
</li>

</ul>


</Box>


)
    
  return (

    <>
<Box>
<AppBar component={'nav'} sx={{bgcolor:"black"}}>
<Toolbar>
<IconButton color="inherit" sx={{display:{xs:"block",sm:"none"}}} onClick={HandlerToggle}>

<MenuIcon/>
</IconButton>

<Typography color={"goldenrod"} variant="h6" component='div' sx={{flexGrow:1}}> 
<img src={logo} height='70' width="200"/>

</Typography>

<Box sx={{display:{xs:"none",sm:"block"}}}>

<ul className="Navigation-menu">

<li>
    <NavLink to="/">Home</NavLink>
</li>
<li>
    <NavLink to="/about">About</NavLink>
</li>

<li>
    <NavLink to="/contact">Contact</NavLink>
</li>

<li>
    <NavLink to="/menu">Menu</NavLink>
</li>

</ul>
</Box>
</Toolbar>


</AppBar>

<Box component="nav">

<Drawer variant="temporary" 
anchor="left"
 open={state}
  onClose={HandlerToggle}
  sx={{"& .MuiDrawer-paper":{

    boxSizing:"border-box",
    width:'200px'
  }}}
>

{drawer}

</Drawer>
</Box>
<Toolbar/>
</Box>


    </>



  )

}

export default Header;
