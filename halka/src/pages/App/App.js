import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../SignUpPage/SignUp';
import Login from '../LoginPage/Login'
import Results from '../Results/Results';

function App() {
  return (
    <div className='App'>
      <h1>Halka</h1>
      <Routes>
        <Route path='/signup' element={<SignUp /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/results' element={<Results /> } />
      </Routes>
    </div>
  );
}

export default App;