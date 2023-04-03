import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterList from './Filter/Filter';
import './index.css';
import Counter from './Counter&Timer/Counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Timer from './Counter&Timer/Timer';
import ArticleForm from './Working/ArticleForm';
import DrawerAppBar from './Working/HomePage';
import SignInForm from './Working/SignIn';
import MainArticleForm from './Working/MainArticle';
import SignUp from './Working/SignUp';
import MainPage from './Working/MainPage';
import Contact from './Working/Contact';
import About from './Working/About';
import TaskFile from './Working/TaskFile';
import NestedRouting from './Working/NestedRouting';
import { Content1, Content2 } from './Working/Content';
import Products from './Redux/Product';
import { Provider } from 'react-redux';
import cardStore from './Redux/Storage';
import CartPage from './Redux/ShopPage';
import WishList from './Redux/WishList';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInForm />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<DrawerAppBar />}>
          <Route path='/home' element={<MainPage />} />
          <Route path='/home/articleform' element={<ArticleForm />} />
          <Route path='/home/contact' element={<Contact />} />
          <Route path='/home/about' element={<About />} />
          <Route exact path='/home/mainform' element={<MainArticleForm />} />
          <Route path='/home/nestedRout' element={<NestedRouting />}>
            <Route path='/home/nestedRout/task' element={<TaskFile />}>
              <Route path='/home/nestedRout/task/counter' element={<Counter />} />
              <Route path='/home/nestedRout/task/filter' element={<FilterList />} />
              <Route path="/home/nestedRout/task/timer" element={<Timer />} />
            </Route>
            <Route path='/home/nestedRout/content1' element={<Content1 />}></Route>
            <Route path='/home/nestedRout/content2' element={<Content2 />}></Route>
          </Route>
        </Route>

        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<><h1>404 page</h1><br /><Link to="/">Home</Link></>} />



        {/*    Redux Task    */}

        <Route path='/shop' element={
          <Provider store={cardStore}>
            <CartPage />
            <hr />
            <Products />
          </Provider>
        } />

        <Route path='/wishlist' element={

          <Provider store={cardStore}>
            <WishList />
          </Provider>
        } />


      </Routes>
    </BrowserRouter>

  </React.StrictMode>

);














































































































































































































