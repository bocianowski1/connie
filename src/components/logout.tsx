"use client";
import { logout } from "@/app/logg-inn/actions";

export default function LogOutButton() {
  return (
    <button
      onClick={() => logout()}
      className="bg-primary font-medium flex flex-row h-10 items-center justify-center px-4 text-white w-fit rounded-lg gap-4"
    >
      Logg ut
    </button>
  );
}
