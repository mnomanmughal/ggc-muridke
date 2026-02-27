import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Departments from './pages/Departments'
import Faculty from './pages/Faculty'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  const [isUrdu, setIsUrdu] = useState(false)

  // Toggle language between English and Urdu
  const toggleLanguage = () => {
    setIsUrdu(!isUrdu)
  }

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isUrdu={isUrdu} toggleLanguage={toggleLanguage} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isUrdu={isUrdu} />} />
            <Route path="/about" element={<About isUrdu={isUrdu} />} />
            <Route path="/admissions" element={<Admissions isUrdu={isUrdu} />} />
            <Route path="/departments" element={<Departments isUrdu={isUrdu} />} />
            <Route path="/faculty" element={<Faculty isUrdu={isUrdu} />} />
            <Route path="/gallery" element={<Gallery isUrdu={isUrdu} />} />
            <Route path="/news" element={<News isUrdu={isUrdu} />} />
            <Route path="/contact" element={<Contact isUrdu={isUrdu} />} />
          </Routes>
        </main>

        <Footer isUrdu={isUrdu} />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
