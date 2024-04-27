export default function DashBoard() {
  return (
    <div className="grid grid-cols-2">
      <div className="border rounded-lg">
        <p>Kontraker</p>
      </div>
      <div className="border rounded-lg">
        <p>Profil</p>
      </div>

      <div className="col-span-2">Tidligere arrangementer</div>
    </div>
  );
}
