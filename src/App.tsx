import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QueryInterface from './components/QueryInterface';
import CommunityForum from './components/CommunityForum';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QueryInterface />
        <CommunityForum />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;