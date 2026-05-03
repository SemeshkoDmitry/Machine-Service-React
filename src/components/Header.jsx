import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header({ cartCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">Machine Service</h1>

        <nav className="nav">
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/about">Про нас</NavLink>
          <NavLink to="/contacts">Контакти</NavLink>

          <div className="cart-box">
            <button
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              Кошик ({cartCount})
            </button>

            {isCartOpen && (
              <div className="cart-dropdown">
                У кошику: {cartCount}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header