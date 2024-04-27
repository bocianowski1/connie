"use client";
import { Browse } from "@/components";
import { linjeforeninger, locations, sectors } from "@/data";
import { useState } from "react";

export default function UtforskLinjeforeninger() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [filteredData, setFilteredData] = useState(linjeforeninger);

  const reset = () => {
    setName("");
    setLocation("");
    setSector("");
    setFilteredData(linjeforeninger);
  };
  return (
    <div className="px-32 space-y-24 max-w-screen-2xl">
      <h1 className="text-5xl text-balance font-serif font-medium">
        Utforsk linjeforeninger
      </h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 space-y-2">
          <input
            type="text"
            placeholder="Søk etter bedrift"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setFilteredData(
                linjeforeninger.filter((d) => {
                  return d.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                })
              );
            }}
            className="w-full border border-gray-500 rounded-lg py-2 px-3 bg-offwhite"
          />
          <select
            value={location || ""}
            onChange={(e) => {
              setLocation(e.target.value);
              setFilteredData(
                linjeforeninger.filter((d) => {
                  return d.locations.includes(e.target.value as never);
                })
              );
            }}
            className="w-full border border-gray-500 rounded-lg py-2 px-3 bg-offwhite"
          >
            <option value="">Velg sted</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <select
            value={sector || ""}
            onChange={(e) => {
              setSector(e.target.value);
              setFilteredData(
                linjeforeninger.filter((d) => {
                  return d.sectors.includes(e.target.value as never);
                })
              );
            }}
            className="w-full border border-gray-500 rounded-lg py-2 px-3 bg-offwhite"
          >
            <option value="">Velg sektor</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button onClick={reset} className="primary-button w-full">
            Nullstill
          </button>
        </div>
        <Browse data={filteredData} className="col-span-9 pb-12" />
      </div>
    </div>
  );
}
