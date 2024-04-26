import { StudyCycle } from "@/components/study-cycle";

export default function Home() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <header className="flex items-center justify-between p-6">
        <div>
          <a className="font-serif font-medium text-2xl" href="/">
            Connie
          </a>
        </div>

        <menu>
          <li>
            <a className="text-sm font-medium" href="/login">
              Logg inn
            </a>
          </li>
        </menu>
      </header>

      <div className="max-w-screen-md mx-auto w-full py-24 space-y-8">
        <h1 className="text-5xl text-center overflow-hidden text-balance max-w-92 mx-auto font-serif font-medium">
          Finn nyutdannede <br /> <StudyCycle /> <br />
          på studisted
        </h1>

        <div className="max-w-[320px] w-full mx-auto">
          <input
            className="p-4 border-2 border-gray-500 rounded-full w-full"
            type="text"
            placeholder="Søk etter linjeforening..."
          />
        </div>
      </div>
    </div>
  );
}
