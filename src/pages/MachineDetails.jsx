import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { machines } from '../data/machines'

function MachineDetails({ onBuy }) {
  const navigate = useNavigate()
  const { id } = useParams()

  const machine = machines.find(m => m.id === Number(id))

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`machine-${id}`)
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem(`machine-${id}`, count)
  }, [count, id])

  if (!machine) return <p>Не знайдено</p>

  const handleBuy = () => {
    setCount(prev => prev + 1)
    onBuy()
  }

  return (
    <main className="main">
      <div className="container">
        <h2>{machine.name}</h2>

        <img src={machine.image} alt={machine.name} style={{ width: '300px' }} />

        <p><b>Послуга:</b> {machine.service}</p>
        <p><b>Ціна:</b> {machine.price} грн</p>
        <p>{machine.description}</p>

        <button onClick={handleBuy}>Замовити</button>

        <p>Кількість: {count}</p>

        <br />

        <button onClick={() => navigate('/catalog')}>
          Назад до каталогу
        </button>
      </div>
    </main>
  )
}

export default MachineDetails