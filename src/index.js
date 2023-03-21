import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterList from './Filter/Filter';
//import Form from './Form';
import './index.css';
import Counter from './Counter&Timer/Counter';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Timer from './Counter&Timer/Timer';
import NewTimer from './Counter&Timer/Timer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
      
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/filter" element={<FilterList/>}/>
        <Route path="/" element={<App/>}/>
       <Route path="/timer" element={<Timer/>}/>
       <Route path="*" element={<><h1>404 page</h1><br/><Link to="/">Home</Link></>}/>


      </Routes>
    </BrowserRouter>
    {/* <FilterList/>
   <Counter/>  */}
   {/* <App/> */}
  </React.StrictMode>

);














































































































































































































