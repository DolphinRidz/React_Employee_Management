import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Landing, Error, Register, UserForm, ProtectedRoute, submitFormData} from './pages/Index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/submitted' element={<submitFormData />} />
      <Route path='*' element={<Error />} />
      
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
