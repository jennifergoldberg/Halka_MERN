import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../SignUpPage/SignUp';

function App() {
  return (
    <div className='App'>
      <h1>Halka</h1>
      <Routes>
        <Route path='/' element={<SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;