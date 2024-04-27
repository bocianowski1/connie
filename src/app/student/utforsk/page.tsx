"use client";
import { Browse } from "@/components";
import { linjeforeninger, Sector } from "@/data";
import { useState } from "react";

export default function UtforskForStudenter() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [filteredData, setFilteredData] = useState(linjeforeninger);

  const filterData = () => {
    const filtered = linjeforeninger.filter((d) => {
      if (name && !d.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (location && !d.locations.includes(location as never)) {
        return false;
      }
      if (sector && !d.sectors.includes(sector as never)) {
        return false;
      }
      return true;
    });
    setFilteredData(filtered);
  };
  return (
    <div>
      <h1>Utforsk Bedrifter</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Søk etter linjeforening"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={location || ""}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Velg sted</option>
            <option value="Trondheim">Trondheim</option>
            <option value="Oslo">Oslo</option>
            <option value="Bergen">Bergen</option>
          </select>
          <select
            value={sector || ""}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value="">Velg sektor</option>
            <option value="teknologi">Teknologi</option>
            <option value="finans">Finans</option>
            <option value="konsulent">Konsulent</option>
          </select>
          <button onClick={filterData}>Filtrer</button>
        </div>
        <Browse data={filteredData} className="col-span-10" />
      </div>
    </div>
  );
}
