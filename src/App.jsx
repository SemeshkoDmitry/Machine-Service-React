import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCart = localStorage.getItem('cartCount')
    return savedCart ? Number(savedCart) : 0
  })

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount)
  }, [cartCount])

  const handleBuy = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Main onBuy={handleBuy} />
      <Footer />
    </div>
  )
}

export default App