import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import Contact from './pages/Contect.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import About from './pages/About.jsx'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <Header />

      <div className="app-main">
          <Toaster position="top-center" />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
