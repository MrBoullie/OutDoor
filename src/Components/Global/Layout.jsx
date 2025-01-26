import React from 'react'
import Header from '../NavBar/Header'
import Footer from '../Footer/Footer'


const Layout = ({ children,cartCount }) => {
    return (
      <>
        <Header cartCount={cartCount}/>
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  
  export default Layout;
