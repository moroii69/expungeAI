// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageUploader from './components/ImageUploader';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import DocsPage from './components/DocsPage';
import TermsPage from './components/TermsPage';
import Chatbot from './components/Chatbot';

function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <ImageUploader />
      </div>
      <Features />
      <ComingSoon />
      <PricingSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;  
