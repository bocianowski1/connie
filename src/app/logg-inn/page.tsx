import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg flex flex-col gap-4 p-10">
        <h1 className="text-3xl font-serif font-medium text-center">
          Logg inn
        </h1>
        <button
          className="font-serif bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Som bedrift
        </button>
        <button
          className="font-serif bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Som student
        </button>
      </div>
    </main>
  );
}
