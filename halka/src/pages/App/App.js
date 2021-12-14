import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../SignUpPage/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;