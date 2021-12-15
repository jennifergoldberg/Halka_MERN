import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../SignUpPage/SignUp';
import Login from '../LoginPage/Login'
import Results from '../Results/Results';
import Start from '../Start/Start'
import Landing from '../LandingPage/Landing';
import CheckIn from '../CheckInPage/CheckIn'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing /> } />
        <Route path='/start' element={<Start /> } />
        <Route path='/signup' element={<SignUp /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/results' element={<Results /> } />
        <Route path='/checkin' element={<CheckIn /> } />
      </Routes>
    </div>
  );
}

export default App;