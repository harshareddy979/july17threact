import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './firstComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/register';
import HomePage from './components/Homepage';
import ContactPage from './components/Contact';
import UseContext from './components/UseContext';
import UseEffect from './components/useEffect';
import ApiCalls from './components/ApiCalls';
import UseRef from './components/useRef';
import UseMemo from './components/useMemo';
import FirstClassComponent from './components/classComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/useContext' element={<UseContext/>}></Route>
          <Route path='/useEffect' element={<UseEffect/>}></Route>
          <Route path='/apiCalls' element={<ApiCalls/>}></Route>
          <Route path='/useRef' element={<UseRef/>}></Route>
          <Route path='/useMemo' element={<UseMemo/>}></Route>
          <Route path='/classComponent' element={<FirstClassComponent/>}></Route>
      </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
