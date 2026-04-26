import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MachineCard({ machine, onBuy }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`machine-${machine.id}`)
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem(`machine-${machine.id}`, count)
  }, [count, machine.id])

  const handleBuy = () => {
    setCount(prev => prev + 1)
    onBuy()
  }

  return (
    <div className="card">
      <img src={machine.image} alt={machine.name} />

      <h3>{machine.name}</h3>
      <p>{machine.service}</p>
      <p><b>{machine.price} грн</b></p>

      <button onClick={handleBuy}>Замовити</button>

      <p>Кількість: {count}</p>

      <Link to={`/machine/${machine.id}`} className="details-btn">
        Детальніше
      </Link>
    </div>
  )
}

export default MachineCard