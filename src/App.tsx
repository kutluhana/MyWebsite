import React from 'react';
import Header from './sections/Header';
import Introduction from './sections/Introduction';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return <div className="App min-h-screen flex flex-col bg-black">
      <Header />
      <Introduction />
      <Projects />
      <TechStack />
      <Footer />
    </div>;
};

export default App;