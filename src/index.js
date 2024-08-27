import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponenets from './components/router';
import Navbar from './context/navbar';
import Footer from './context/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <RouterComponenets />
  <Footer />

  </BrowserRouter>
  
);
