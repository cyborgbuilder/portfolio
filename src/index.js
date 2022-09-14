import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Yoogoo from './components/Yogoo';
import Cellphones from './components/Cellphones';
import Prasara from './components/Prasara';
import NoSignal from './components/NoSignal';
import Video from './components/Video';
import HoldingHopes from './components/HoldingHopes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path='/yoogoo' element={<Yoogoo />} />
      <Route path='/cellphones' element={<Cellphones />} />
      <Route path='/prasara' element={<Prasara />} />
      <Route path='/nosignal' element={<NoSignal />} />
      <Route path='/mekaverse' element={<Video />} />
      <Route path='/holdinghopes' element={<HoldingHopes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

