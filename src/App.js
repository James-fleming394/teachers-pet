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
import Footer from './components/Footer';
import Lesson from './pages/Lesson';
import MathLesson from './pages/Lesson-math';
import EnglishLesson from './pages/Lesson-english';
import WritingLesson from './pages/Lesson-writing';
import ScienceLesson from './pages/Lesson-science';
import SSLesson from './pages/Lesson-ss';
import OtherLesson from './pages/Lesson-other';

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
          <Route path="/lessons" element={<Lesson />} />
              <Route path="/lessons/math" element={<MathLesson />} />
              <Route path="/lessons/english" element={<EnglishLesson />} />
              <Route path="/lessons/writing" element={<WritingLesson />} />
              <Route path="/lessons/science" element={<ScienceLesson />} />
              <Route path="/lessons/social-studies" element={<SSLesson />} />
              <Route path="/lessons/other" element={<OtherLesson />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
