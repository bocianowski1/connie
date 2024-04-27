"use client";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <main>
      <div className="bg-white max-w-72 w-full mx-auto my-24 rounded-xl shadow-lg flex flex-col gap-4 p-10 space-y-10 border-2 border-gray-400">
        <h1 className="text-3xl font-serif font-medium text-center">
          Logg inn
        </h1>

        <div className="flex flex-col gap-4">
          <button
            className="bg-primary text-white py-2 px-4 rounded-lg"
            onClick={() => login("bedrift")}
          >
            Som bedrift
          </button>
          <button
            className="bg-primary text-white py-2 px-4 rounded-lg"
            onClick={() => login("student")}
          >
            Som student
          </button>
        </div>
      </div>
    </main>
  );
}
