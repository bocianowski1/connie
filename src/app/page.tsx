import { StudyCycle } from "@/components";
import NotionVC from "@/assets/notion-vc.webp";
import Arrow from "@/assets/arrow.svg";
import Image from "next/image";
import { companyLogos } from "../assets/companyLogos/companyLogos";
import { linjeforeningLogos } from "@/assets/linjeforeningLogos/linjeForeningLogos";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Slideshow from "@/components/Slideshow";

export const metadata: Metadata = {
  title: "Connie",
};

export default function Home() {
  const marqueeDivs: string = "flex items-center gap-16 mr-16 h-full";
  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className="relative max-w-screen-md mx-auto w-full py-24">
        <h1 className="text-5xl flex flex-col gap-2 justify-center items-center overflow-hidden text-balance max-w-92 mx-auto font-serif font-medium">
          <span>Finn nyutdannede</span>
          <span>
            <StudyCycle />
          </span>
          <span>til din bedrift</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-screen-md mx-auto py-8 text-center text-balance font-serif">
          Connie hjelper linjeforeninger og bedrifter med å finne hverandre. Vi
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

        <Image
          src={Arrow}
          width={200}
          height={200}
          alt="arrow"
          className="-z-10 absolute bottom-16 left-20 rotate-[10deg]"
        />
      </div>

      <div className="flex flex-col gap-20 max-w-screen-xl mx-auto">
        <Slideshow logos={linjeforeningLogos} />
        <Slideshow logos={companyLogos} dir="right" />
      </div>

      <div className="my-24 space-y-12">
        <div className="max-w-screen-md mx-auto flex gap-8 items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-serif font-medium">
              Hvordan fungerer det?
            </h2>
            <p className="text-lg text-gray-700 mx-auto py-8 text-balance">
              Vi har laget en plattform som gjør det enklere for linjeforeninger
              å finne bedrifter som vil samarbeide, og for bedrifter å finne
              linjeforeninger som passer til deres behov. Vi har tjenester som
              gjør det enklere for linjeforeninger å finne bedrifter som vil
              samarbeide, og for bedrifter å finne linjeforeninger som passer
              til deres behov.
            </p>
          </div>
          <div className="w-1/2">
            <Image src={NotionVC} width={750} height={750} alt="vc stick man" />
          </div>
        </div>

        <div className="max-w-screen-md mx-auto">
          <div className="w-1/2"></div>
          <div className="ml-auto w-1/2">
            <h2 className="text-3xl font-serif font-medium">
              Hvordan fungerer det?
            </h2>
            <p className="text-lg text-gray-700 mx-auto py-8 text-balance">
              Vi har laget en plattform som gjør det enklere for linjeforeninger
              å finne bedrifter som vil samarbeide, og for bedrifter å finne
              linjeforeninger som passer til deres behov. Vi har tjenester som
              gjør det enklere for linjeforeninger å finne bedrifter som vil
              samarbeide, og for bedrifter å finne linjeforeninger som passer
              til deres behov.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
