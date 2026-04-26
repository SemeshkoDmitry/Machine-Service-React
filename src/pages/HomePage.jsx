import { useEffect, useState } from 'react'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <main className="main">
        <div className="container">
          <div className="spinner"></div>
          <p>Завантаження...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="main">
      <div className="container">
        <h2>Головна сторінка</h2>
        <p>Ласкаво просимо до сервісу обслуговування верстатів.</p>
      </div>
    </main>
  )
}

export default HomePage