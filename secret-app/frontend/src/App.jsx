import { useState } from 'react'
import './App.css'

function App() {
  const [secret, setSecret] = useState("")
  const [response, setResponse] = useState("")

  const sendSecret = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/hide/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: secret }),
    })
    const data = await res.json()
    setResponse(data)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Secret App</h1>
      <input
        type="text"
        placeholder="Escribe tu secreto..."
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <button onClick={sendSecret}>Enviar</button>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}

export default App
