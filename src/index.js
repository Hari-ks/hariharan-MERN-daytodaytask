import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterList from './Filter/Filter';
import './index.css';
import Counter from './Counter&Timer/Counter';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Timer from './Counter&Timer/Timer';
import MediaCard from './Working/MUI';
import Conatiner from './Working/MUI';
import FormInput from './Working/SampleForm';
import ArticleForm from './Working/ArticleForm';
import DrawerAppBar from './Working/HomePage';
import SignInForm from './Working/SignIn';
import MainArticleForm from './Working/MainArticleForm';
import SignUp from './Working/SignUp';
import MainPage from './Working/MainPage';
import Contact from './Working/Contact';
import About from './Working/About';
import Component3 from './Practise/OtherComponent';
import Context from './Practise/useContext';
import Component1 from './Practise/SampleConetxt';
import TaskFile from './Working/TaskFile';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
   
    <BrowserRouter>
      <Routes>
      
      <Route path='/home' element={<DrawerAppBar/>}>
        <Route path='/home' element={<MainPage/>}/>
      {/* <Route exact path="/home/counter" element={<Counter/>}/>
        <Route exact path="/home/filter" element={<FilterList/>}/> */}
        <Route path='/home/articleform' element={<ArticleForm/>}/>
       <Route path='/home/contact' element={<Contact/>}/>
       <Route path='/home/about' element={<About/>}/>
        <Route exact path='/home/mainform' element={<MainArticleForm/>}/>
        <Route path='/home/task' element={<TaskFile/>}>
          <Route path='/home/task/counter' element={<Counter/>}/>
          <Route path='/home/task/filter' element={<FilterList/>}/>
        </Route>
      </Route>
       
       
       <Route path="/timer" element={<Timer/>}/>
       <Route path='/' element={<SignInForm/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path="*" element={<><h1>404 page</h1><br/><Link to="/">Home</Link></>}/>
       <Route path="/mui" element ={<MediaCard/>}/>
       <Route exact path='/mainformNew' element={<MainArticleForm/>}/>
       <Route path='/demo' element={<FormInput/>}/>

       <Route path='/testing' element={<Context/>}/>
       


      </Routes>
    </BrowserRouter>
    {/* <FilterList/>
   <Counter/>  */}
   {/* <App/> */}
 
  </React.StrictMode>

);














































































































































































































