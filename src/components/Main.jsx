import { useEffect, useState } from 'react'
import MachineCard from './MachineCard'

function Main({ onBuy }) {
  const [isLoading, setIsLoading] = useState(true)
  const [seconds, setSeconds] = useState(10)

  const machines = [
    {
      id: 1,
      name: 'Токарний верстат 1К62',
      service: 'Планове ТО',
      price: 5000,
      image: 'https://images.prom.ua/6897788108_w1280_h640_6897788108.jpg',
    },
    {
      id: 2,
      name: 'Фрезерний верстат 6Р82',
      service: 'Діагностика неполадок',
      price: 7000,
      image: 'https://images.prom.ua/7048446128_w1280_h640_7048446128.jpg',
    },
    {
      id: 3,
      name: 'CNC Haas',
      service: 'Оновлення ПЗ',
      price: 12000,
      image: 'https://me.berkeley.edu/wp-content/uploads/2020/09/Haas-VF0-scaled.jpg',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

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
        <h2>Каталог обладнання</h2>

        <div className="banner">
          {seconds > 0 ? (
            <p>
              Акція! Безкоштовна консультація з менеджером при оформленні послуги.
              До завершення акції: {seconds} с.
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

export default Main