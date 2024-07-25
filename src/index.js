/* eslint-disable import-helpers/order-imports */
/* eslint-disable react/no-deprecated */
/* eslint-disable prettier/prettier */
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify';
import Login from './Containers/Login'
import Register from './Containers/Register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <Login />
   <Register/>
    <ToastContainer/>
    <GlobalStyles />

  </>,


  document.getElementById('root')
);



