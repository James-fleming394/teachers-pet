import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className='actual-app'>
        
      </div>
    </div>
  );
}

export default App;
