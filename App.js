import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import './main.css';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '#home':
        return <Home />;
      case '#gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
