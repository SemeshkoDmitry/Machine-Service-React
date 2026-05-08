import { useEffect, useState } from 'react'
import MachineCard from '../components/MachineCard'

function CatalogPage({ onBuy }) {
  const [machines, setMachines] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Усі')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/machines`)
      .then(res => res.json())
      .then(data => setMachines(data))
  }, [])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  const filteredMachines =
    selectedCategory === 'Усі'
      ? machines
      : machines.filter(
          machine => machine.category === selectedCategory
        )

  return (
    <main className="main">
      <div className="container">
        <h2>Каталог обладнання</h2>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter"
        >
          <option>Усі</option>

          {categories.map(category => (
            <option key={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="cards">
          {filteredMachines.map(machine => (
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