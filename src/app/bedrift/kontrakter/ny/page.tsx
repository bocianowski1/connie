"use client";

import { useState } from "react";

export default function Ny() {
  const [agree, setAgree] = useState(false);
  return (
    <div className="px-32 w-full space-y-8 pb-12 max-w-screen-2xl">
      <h1 className="text-5xl text-balance font-serif font-medium">
        Inngå ny kontrakt
      </h1>
      <div className="flex justify-center">
        <div className="px-auto flex justify-center w-full bg-red-200">
          <iframe
            src={"/contractTemplate.pdf"}
            className="w-full h-[100vh]"
          ></iframe>
        </div>
      </div>
      <div className="space-y-2 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={() => setAgree(!agree)}
            checked={agree}
          />
          <label onClick={() => setAgree(!agree)}>Jeg godtar vilkårene</label>
        </div>
        <button className="primary-button" disabled={!agree}>
          Signer med BankID
        </button>
      </div>
    </div>
  );
}
