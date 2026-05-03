import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import MachineDetails from './pages/MachineDetails'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

import './index.css'

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem('cartCount')
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount)
  }, [cartCount])

  const handleBuy = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <Router>
      <div className="app">
        <Header cartCount={cartCount} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage onBuy={handleBuy} />} />
          <Route
            path="/machine/:id"
            element={<MachineDetails onBuy={handleBuy} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App