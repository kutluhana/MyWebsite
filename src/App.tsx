import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './sections/Header';
import Introduction from './sections/Introduction';
import ContentSections from './components/ContentSections';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return <div className="App min-h-screen min-w-0 w-full max-w-[100vw] flex flex-col overflow-x-clip bg-black">
    <ScrollProgress />
    <Header />
    <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
      <Introduction />
      <ContentSections />
    </div>
    <Footer />

  </div>;
};

export default App;