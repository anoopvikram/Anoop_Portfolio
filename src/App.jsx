import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Lazy load other pages
const Dev = lazy(() => import('./pages/Dev'));
const Anime = lazy(() => import('./pages/anime'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div style={{ color: "#fff", textAlign: "center" }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/animation" element={<Anime />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
