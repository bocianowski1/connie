import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const contentType = new Headers()
contentType.append('Content-Type', 'application/json')

function App() {
  const [count, setCount] = useState(0)
  const [messages, setMessages] = useState([])
  const inputRef = useRef()

  function lagreMelding() {
    const message = inputRef.current.value
    inputRef.current.value = ''
    fetch('/api', { method: 'POST', headers: contentType, body: JSON.stringify({ message }) })
      .then(response => response.json())
      .then(json => setMessages(json.messages))
  }

  useEffect(() => {
    fetch('/api', {method: 'GET'})
      .then(response => response.json())
      .then(json => setMessages(json.messages))
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2>Messages:</h2>
      <div>
        {messages.map(message => <p>{message}</p>)}
      </div>

      <h2>Post message:</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
        <label>
          Skriv melding:<br />
          <textarea ref={inputRef} />
        </label>
        <button onClick={lagreMelding}>Lagre</button>
      </div>
    </>
  )
}

export default App
