import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponenets from './components/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <RouterComponenets />

  </BrowserRouter>
  
);
