import Home from '../components/sections/Home/Home';
import NavBar from '../components/sections/Navbar/Navbar';
import React, { Fragment } from 'react';
import Products from '../components/sections/Products/Products';
import Services from '../components/sections/Services/Services';
import About from '../components/sections/About/About';
import Contact from '../components/sections/Contact/Contact';
import Footer from '../components/sections/Footer/Footer';

function Landing() {
  return (
    <Fragment >
        <NavBar />
        <Home />
        <About />
        <Products />
        <Services />
        <Contact />
        <Footer />
    </Fragment>
  );
}

export default Landing;