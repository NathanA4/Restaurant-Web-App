import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { AboutUs, Footer, Header, Menu, Contact } from './container';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Products' element={<Menu />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
