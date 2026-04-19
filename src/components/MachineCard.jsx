import { useState } from 'react'

function MachineCard({ machine, onBuy }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
    onBuy()
  }

  return (
    <div className="card">
      <img src={machine.image} alt={machine.name} />

      <h3>{machine.name}</h3>
      <p>{machine.service}</p>
      <p>
        <b>{machine.price} грн</b>
      </p>

      <button onClick={handleClick}>
        Замовити послугу
      </button>

      <p>Кількість: {count}</p>
    </div>
  )
}

export default MachineCard