import MachineCard from './MachineCard'

function Main() {

  const machines = [
    {
      id: 1,
      name: "Токарний верстат 1К62",
      service: "Планове ТО",
      price: 5000,
      image: "https://images.prom.ua/6897788108_w1280_h640_6897788108.jpg"
    },
    {
      id: 2,
      name: "Фрезерний верстат 6Р82",
      service: "Діагностика",
      price: 7000,
      image: "https://images.prom.ua/7048446128_w1280_h640_7048446128.jpg"
    },
    {
      id: 3,
      name: "CNC Haas",
      service: "Оновлення ПЗ",
      price: 12000,
      image: "https://me.berkeley.edu/wp-content/uploads/2020/09/Haas-VF0-scaled.jpg"
    }
  ]

  return (
    <main className="main">
      <div className="container">
        <h2>Каталог обладнання</h2>

        <div className="cards">
          {machines.map(machine => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>

      </div>
    </main>
  )
}

export default Main