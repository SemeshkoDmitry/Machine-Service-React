import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MachineDetails({ onBuy }) {
  const navigate = useNavigate()
  const { id } = useParams()

  const [machine, setMachine] = useState(null)

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`machine-${id}`)
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/machines/${id}`)
      .then(res => res.json())
      .then(data => setMachine(data))
  }, [id])

  useEffect(() => {
    localStorage.setItem(`machine-${id}`, count)
  }, [count, id])

  if (!machine) {
    return (
      <main className="main">
        <div className="container">
          <p>Завантаження...</p>
        </div>
      </main>
    )
  }

  const handleBuy = () => {
    setCount(prev => prev + 1)
    onBuy()
  }

  return (
    <main className="main">
      <div className="container">
        <h2>{machine.name}</h2>

        <img
          src={machine.image}
          alt={machine.name}
          className="details-image"
        />

        <p><b>Послуга:</b> {machine.service}</p>

        <p><b>Ціна:</b> {machine.price} грн</p>

        <p>{machine.description}</p>

        <button onClick={handleBuy}>
          Замовити
        </button>

        <p>Кількість: {count}</p>

        <button
          className="back-button"
          onClick={() => navigate('/catalog')}
        >
          Назад до каталогу
        </button>
      </div>
    </main>
  )
}

export default MachineDetails