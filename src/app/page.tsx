import Marquee from "react-fast-marquee";
import { StudyCycle } from "@/components";
import Image from "next/image";
import { companyLogos } from "../assets/companyLogos/companyLogos";
import { linjeforeningLogos } from "@/assets/linjeforeningLogos/linjeForeningLogos";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Connie",
};

export default function Home() {
  const marqueeDivs: string = "flex items-center gap-16 mr-16 h-full";
  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className="max-w-screen-md mx-auto w-full py-24">
        <h1 className="text-5xl flex flex-col gap-2 justify-center items-center overflow-hidden text-balance max-w-92 mx-auto font-serif font-medium">
          <span>Finn nyutdannede</span>
          <span>
            <StudyCycle />
          </span>
          <span>til din bedrift</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-screen-md mx-auto py-8 text-center text-balance font-serif">
          Coonie hjelper linjeforeninger og bedrifter med å finne hverandre. Vi
          har tjenester som gjør det enklere for linjeforeninger å finne
          bedrifter som vil samarbeide, og for bedrifter å finne linjeforeninger
          som passer til deres behov.
        </p>

        <p className="w-fit mx-auto">
          <a
            className="bg-primary font-medium flex flex-row h-10 items-center justify-center px-4 text-white w-fit rounded-lg gap-4"
            href="/"
          >
            Bli med <ArrowRight className="h-5 w-5" />
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-20 max-w-screen-xl mx-auto">
        <Marquee gradient gradientColor="#f0ece3" pauseOnHover>
          <div className={marqueeDivs}>
            {linjeforeningLogos.map((img) => (
              <div key={String(img)}>
                <Image
                  src={img}
                  alt="lol"
                  height={1000}
                  width={1000}
                  className="h-20 w-full"
                />
              </div>
            ))}
            <div>
              <p className="text-2xl font-medium">Er du neste...?</p>
            </div>
          </div>
        </Marquee>
        <Marquee
          direction="right"
          gradient
          gradientColor="#f0ece3"
          pauseOnHover
        >
          <div className={marqueeDivs}>
            {companyLogos.map((img) => (
              <div key={String(img)}>
                <Image
                  src={img}
                  alt="lol"
                  height={1000}
                  width={1000}
                  className="h-20 w-full"
                />
              </div>
            ))}
            <div>
              <p className="text-2xl font-medium">Er du neste...?</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
