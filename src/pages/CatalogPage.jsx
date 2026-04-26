import { useEffect, useState } from 'react'
import MachineCard from '../components/MachineCard'
import { machines } from '../data/machines'

function CatalogPage({ onBuy }) {
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    if (seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  return (
    <main className="main">
      <div className="container">
        <h2>Каталог обладнання</h2>

        <div className="banner">
          {seconds > 0 ? (
            <p>
              Акція! Безкоштовна консультація з менеджером. 
              Залишилось: {seconds} с.
            </p>
          ) : (
            <p>Акція завершилась.</p>
          )}
        </div>

        <div className="cards">
          {machines.map(machine => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onBuy={onBuy}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default CatalogPage