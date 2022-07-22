import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Layout/Cart';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import Notes from './Layout/Notes';
import NotFound from './Layout/NotFound';

function App() {
  return (
    <div className='bg-blue-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/notes' element={<Notes />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
