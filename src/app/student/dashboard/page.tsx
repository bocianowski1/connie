export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-2">
      <div className="border rounded-lg">
        <p>Oppgaver</p>
      </div>
      <div className="border rounded-lg">
        <p>Profil</p>
      </div>

      <div className="col-span-2">Tidligere arrangementer</div>
    </div>
  )
}
