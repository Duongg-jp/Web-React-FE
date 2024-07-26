import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'; 

import Not from './pages/Not';
import ProductDetail from './pages/ProductDetail';
import DangKi from './pages/DangKi';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='productdetail' element={<ProductDetail />} />
          <Route path='dang-ki' element={<DangKi />} />
          <Route path='*' element={<Not />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
