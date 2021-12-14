import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../SignUpPage/SignUp';
import Login from '../LoginPage/Login'
import Start from '../Start/Start'
import Landing from '../LandingPage/Landing';
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Halka</h1>
      <Routes>
        <Route path='/' element={<Landing /> } />
        <Route path='/start' element={<Start /> } />
        <Route path='/signup' element={<SignUp /> } />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </div>
  );
}

export default App;