import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import './styles/main.css';

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
