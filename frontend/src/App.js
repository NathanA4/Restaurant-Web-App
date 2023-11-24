import React from "react";
import { Navbar } from './components';
import {AboutUs, Footer, Gallery, Header, Menu, FindUs} from './container';
import './App.css';

const App = () => (
    <div>
      <Navbar />
      <Header/>
      <Footer/>
      <AboutUs/>
      <Gallery/>
      <Menu/>
      <FindUs/>
    </div>
  );
export default App;
