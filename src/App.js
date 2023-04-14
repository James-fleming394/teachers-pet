import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Assessments from './pages/Assessments';
import Tests from './pages/Tests';
import Quizzes from './pages/Quizzes';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <div className='actual-app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessments" element={<Assessments />} />
              <Route path="/assessments/tests" element={<Tests />} />
              <Route path="/assessments/quizzes" element={<Quizzes />} />

          <Route path="/aboutus" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
