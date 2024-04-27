"use client";
import { logout } from "@/app/logg-inn/actions";

export default function LogOutButton() {
  return (
    <button onClick={() => logout()} className="primary-button">
      Logg ut
    </button>
  );
}
