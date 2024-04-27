import Marquee from "react-fast-marquee";
import { StudyCycle } from "@/components";
import Image from "next/image";

export default function Home() {
  const imgPaths = [
    "soprasteriaTransparent.png",
    "optiverTransparent.png",
    "drdropinTransparent.png",
    "bekkTransparent.png",
  ];
  return (
    <div className="min-h-screen h-full flex flex-col">
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

      <div className="flex flex-col gap-4">
        <Marquee>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg mx-4">
              <p className="text-sm">Linjeforening {i}</p>
            </div>
          ))}
        </Marquee>
        <Marquee direction="right">
          {Array.from({ length: 3 }).map((_, i) =>
            imgPaths.map((path) => (
              <div
                key={path}
                className="relative mx-4 p-4 bg-gray-100 rounded-lg flex flex-col h-28 w-auto items-center justify-center"
              >
                <Image
                  src={`/assets/${path}`}
                  alt="lol"
                  className="h-full w-full"
                  fill
                />
              </div>
            ))
          )}

          {/* {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg mx-4">
              <p className="text-sm">Linjeforening {i}</p>
            </div>
          ))} */}
        </Marquee>
      </div>
    </div>
  );
}
