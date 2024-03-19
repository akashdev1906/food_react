import React from 'react';
import Nav from './components/Nav';
import "./assets/css/style.css";
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Product';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Menu/>
    <Products/>
    <Review/>
    <Contact/>
    <Footer/>


    </>
      
  )
}

export default App
