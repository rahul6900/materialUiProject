import React, { children } from 'react'
import Header from './Header';
import Footer from './Footer';

export const Layout = ({children}) => {
  return (
   <>

<Header/>
    <div>{children}</div>
    <Footer/>
   </>
  )
}
export default Layout;