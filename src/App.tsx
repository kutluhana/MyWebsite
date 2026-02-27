import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <div className=""><Footer /></div>
      </div>
    </Router>;
};

export default App;