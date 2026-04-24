import React from 'react';
// Image sync check: verified assets
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ApplyPage from './pages/ApplyPage';
import TrainingsPage from './pages/TrainingsPage';
import HowToApplyPage from './pages/HowToApplyPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import ShortCoursesPage from './pages/ShortCoursesPage';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgramsPage />} />
          <Route path="/programmes/:id" element={<ProgramDetailPage />} />
          <Route path="/short-courses" element={<ShortCoursesPage />} />
          <Route path="/short-courses/:id" element={<ProgramDetailPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
          <Route path="/how-to-apply" element={<HowToApplyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

