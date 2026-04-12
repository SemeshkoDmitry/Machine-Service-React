import { useState } from 'react'

function MachineCard({ machine }) {

  const [count, setCount] = useState(0)

  return (
    <div className="card">

      <img src={machine.image} alt={machine.name} />

      <h3>{machine.name}</h3>
      <p>{machine.service}</p>
      <p><b>{machine.price} грн</b></p>

      <button onClick={() => setCount(count + 1)}>
        Замовити послугу
      </button>

      <p>Кількість: {count}</p>

    </div>
  )
}

export default MachineCard