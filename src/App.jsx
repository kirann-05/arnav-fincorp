import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import LoanProducts from './pages/LoanProducts'
import LoanDetail from './pages/LoanDetail'
import Legal from './pages/Legal'
import './App.css'

// ScrollToTop component to handle route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        // Wait a bit for page load
        setTimeout(() => {
           element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

const App = () => {
  const { theme } = useTheme()

  return (
    <Router>
      <div className="app" data-theme={theme}>
        <ScrollToTop />
        <Navbar />
        <StickyMobileCTA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loans" element={<LoanProducts />} />
          <Route path="/loan/:id" element={<LoanDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
