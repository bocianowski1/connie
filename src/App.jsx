import { useEffect, useState } from 'react'

import './App.css'

const contentType = new Headers()
contentType.append('Content-Type', 'application/json')

function App() {
  const [participants, setParticipants] = useState([])
  const [newParticipant, setNewParticipant] = useState('')

  async function saveNewParticipant() {
    const response = await fetch('/api', { method: 'POST', headers: contentType, body: JSON.stringify({ participant: newParticipant }) })
      .then(response => response.json())
    
    setParticipants(response.participants)
    setNewParticipant('')
  }

  useEffect(() => {
    fetch('/api', {method: 'GET'})
      .then(response => response.json())
      .then(json => setParticipants(json.participants))
  }, [])

  return (
    <>
      <h2>Deltakere:</h2>
      <div>
        {participants.map(participant => <p key={participant}>{participant}</p>)}
      </div>

      <h2>Legg til deltaker:</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5em'}}>
        <label>
          Navn:<br />
          <input value={newParticipant} onChange={(e) => setNewParticipant(e.target.value)} />
        </label>
        <button onClick={saveNewParticipant}>Lagre</button>
      </div>
    </>
  )
}

export default App
