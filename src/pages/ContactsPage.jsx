import { useState } from 'react'

function ContactsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!email.includes('@')) {
      newErrors.email = 'Email має містити @'
    }

    if (message.length < 10) {
      newErrors.message = 'Повідомлення має бути не менше 10 символів'
    }

    if (!name) {
      newErrors.name = "Ім'я є обов'язковим"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert('Повідомлення відправлено!')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <main className="main">
      <div className="container">
        <h2>Контакти</h2>

        <form onSubmit={handleSubmit} className="form">
          
          <div>
            <label>Ім'я:</label><br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label>Email:</label><br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Повідомлення:</label><br />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Відправити</button>
        </form>
      </div>
    </main>
  )
}

export default ContactsPage