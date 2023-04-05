import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Porcofolio';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  // const [route, setRoute] = useState('/');

  // const handleRouteChange = (newRoute) => {
  //   setRoute(newRoute);
  // };
  return (

    <>
      {/* <Router>
        <Navbar route={route} handleRouteChange={handleRouteChange} />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <AboutMe />
            <Services />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contacts />
            <Footer />
          </>} />
          <Route path="/about" element={
            <>
              <AboutMe />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Services />
              <Footer />
            </>
          } />
          <Route path="/experience" element={
            <>
              <Experience />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <Portfolio />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contacts />
              <Footer />
            </>
          } />
        </Routes>
      </Router> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
