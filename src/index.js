import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './components/sign_up/SignUpPage'
import LoginPage from './components/login/LoginPage';
import BookManager from './components/book/BookManager';

import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <Router>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/book" element={<BookManager />} />
   
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
