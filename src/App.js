import React from "react";

import {  HashRouter ,Route,Routes} from 'react-router-dom'
import './Styles/App.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

 function App() {


  return (
  

    <>
<HashRouter>

<Routes>
<Route exact path="/" element={<Home/>}>

</Route>
<Route exact path="/about" element={<About/>}>

</Route>
<Route exact path="/contact" element={<Contact/>}>

</Route>
<Route exact path="/menu" element={<Menu/>}>

</Route>

</Routes>



</HashRouter>
    </>
  )


}

export default App;