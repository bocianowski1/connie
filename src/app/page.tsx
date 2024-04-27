import Marquee from "react-fast-marquee";
import { StudyCycle } from "@/components";
import Image from "next/image";
import { companyLogos } from "../assets/companyLogos/companyLogos";
import linjeForeningLogos from "@/assets/linjeforeningLogos/linjeForeningLogos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connie",
};

export default function Home() {
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
          <div className="flex items-center gap-4 h-full">
            {linjeForeningLogos.map((img) => (
              <div key={String(img)}>
                <Image
                  src={img}
                  alt="lol"
                  height={1000}
                  width={1000}
                  className="h-40 w-full"
                />
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee direction="right">
          <div className="flex items-center gap-4 h-full">
            {companyLogos.map((img) => (
              <div key={String(img)}>
                <Image
                  src={img}
                  alt="lol"
                  height={1000}
                  width={1000}
                  className="h-40 w-full"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
