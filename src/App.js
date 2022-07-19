import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className='bg-blue-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
