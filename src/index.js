import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'; // Import Home component

import SanPham from './pages/SanPham';
import LienHe from './pages/LienHe';
import Not from './pages/Not';
import ProductDetail from './pages/ProductDetail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='sanpham' element={<SanPham />} />
          <Route path='lienhe' element={<LienHe />} />
          <Route path='productdetail' element={<ProductDetail />} />
          <Route path='*' element={<Not />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
