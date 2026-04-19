import { useState } from 'react'

function Header({ cartCount }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">Machine Service</h1>

        <nav className="nav">
          <a href="#">Головна</a>
          <a href="#">Каталог</a>
          <a href="#">Про нас</a>

          <div className="cart-box">
            <button
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              Кошик ({cartCount})
            </button>

            {isCartOpen && (
              <div className="cart-dropdown">
                <p>У кошику товарів: {cartCount}</p>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header