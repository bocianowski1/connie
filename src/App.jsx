import { useEffect, useState } from 'react'

import './App.css'

const contentType = new Headers()
contentType.append('Content-Type', 'application/json')

function App() {
  const [participants, setParticipants] = useState([])
  const [newParticipant, setNewParticipant] = useState('')

  async function saveNewParticipant() {
    const response = await fetch('/api/deltakere', { method: 'POST', headers: contentType, body: JSON.stringify({ participant: newParticipant }) })
      .then(response => response.json())
    
    setParticipants(response.participants)
    setNewParticipant('')
  }

  useEffect(() => {
    fetch('/api/deltakere', {method: 'GET'})
      .then(response => response.json())
      .then(json => setParticipants(json.participants))
  }, [])

  return (
    <>
      <h1>Labyrintenfinale 2024</h1>
      <h2>Deltakere:</h2>
      <div>
        {participants.map(participant => <p key={participant}>{participant}</p>)}
      </div>

      <div className="participants-list">
        <label>
          <input value={newParticipant} onChange={(e) => setNewParticipant(e.target.value)} />
        </label>
        <button className="new-participant-button" onClick={saveNewParticipant}>Legg til ny deltaker</button>
      </div>
    </>
  )
}

export default App
