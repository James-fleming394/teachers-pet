import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className='actual-app'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
