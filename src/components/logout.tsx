"use client"
import { logout } from "@/app/logg-inn/actions";

export default function LogOutButton() {
  return (
    <button onClick={() => logout()} className="text-sm font-medium">
      Logg ut
    </button>
  );
}
