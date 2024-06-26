import { StudyCycle } from "@/components";
import Arrow from "@/assets/arrow.svg";
import Image from "next/image";
import { companyLogos } from "../assets/companyLogos/companyLogos";
import { linjeforeningLogos } from "@/assets/linjeforeningLogos/linjeForeningLogos";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Slideshow from "@/components/Slideshow";
import Fig9 from "@/assets/figs/fig-9.webp";
import Fig13 from "@/assets/figs/fig-13.webp";
import Fig2 from "@/assets/figs/fig-2.webp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connie",
};

export default function Home() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <div className="relative max-w-screen-md mx-auto w-full py-24">
        <h1
          className="text-5xl flex flex-col gap-2 justify-center items-center
                        overflow-hidden text-balance max-w-92 mx-auto font-serif font-medium"
        >
          <span>Finn nyutdannede</span>
          <span>
            <StudyCycle />
          </span>
          <span>til din bedrift</span>
        </h1>

        <div className="relative">
          <Image
            className="absolute top-0 right-12 md:right-24 lg:right-32 -translate-y-[65%]"
            src={Fig2}
            width={75}
            height={75}
            alt="vc"
          />
          <p className="text-lg text-gray-700 max-w-screen-md mx-auto py-8 text-center text-balance font-serif">
            Connie hjelper linjeforeninger og bedrifter med å finne hverandre.
            Vi har tjenester som gjør det enklere for linjeforeninger å finne
            bedrifter som vil samarbeide, og for bedrifter å finne
            linjeforeninger som passer til deres behov.
          </p>
        </div>

        <p className="w-fit mx-auto">
          <Link
            className="primary-button flex flex-row items-center justify-center gap-4"
            href="/logg-inn"
          >
            Bli med <ArrowRight className="h-5 w-5" />
          </Link>
        </p>

        <Image
          src={Arrow}
          width={200}
          height={200}
          alt="arrow"
          className="-z-10 absolute bottom-14 lg:bottom-16 left-8 md:left-20 lg:left-20 scale-75 md:scale-90 lg:scale-100 rotate-[10deg]"
        />
      </div>
      <div className="absolute top-0 h-[900px] left-0 right-0 bg-[url(/line-in-motion.svg)] bg-repeat -z-30"></div>
      <div className="absolute top-[530px] -left-[30%] lg:-left-[10%] -right-[30%] lg:-right-[10%] h-[700px] rounded-t-[100%] bg-lightgray -z-20"></div>

      <div className="flex flex-col gap-14 md:gap-20 max-w-screen-xl mx-auto">
        <Slideshow logos={linjeforeningLogos} />
        <Slideshow logos={companyLogos} dir="right" />
      </div>
      <div className="mt-24 px-8 pb-24 space-y-12 bg-lightgray flex flex-col flex-1">
        <div className="max-w-screen-md mx-auto flex gap-8 items-center">
          <div className="w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-serif font-medium">For studenter</h2>
            <p className="text-lg text-gray-700 mx-auto py-8 text-balance">
              Vi tilbyr en innovativ plattform som forenkler prosessen med å
              finne samarbeidsmuligheter med bedrifter for linjeforeninger. Med
              våre tjenester kan studenter raskt og effektivt koble seg sammen
              med relevante bedrifter som ønsker å samarbeide.
            </p>
          </div>
          <div className="w-1/3 lg:w-1/2 flex items-center justify-center">
            <Image src={Fig13} width={200} height={200} alt="vc stick man" />
          </div>
        </div>

        <div className="max-w-screen-md mx-auto flex items-center gap-8">
          <div className="w-1/3 lg:w-1/2 flex items-center justify-center">
            <Image src={Fig9} width={200} height={200} alt="vc" />
          </div>
          <div className="ml-auto w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-serif font-medium">For bedrifter</h2>
            <p className="text-lg text-gray-700 mx-auto py-8 text-balance">
              Vår plattform tilbyr en unik mulighet for bedrifter å finne
              passende linjeforeninger å samarbeide med. Med våre tjenester kan
              bedrifter identifisere og nå ut til relevante
              studentorganisasjoner som matcher deres behov og interesser. Enten
              det er for å delta i arrangementer, tilby prosjektsamarbeid eller
              rekruttere talenter, vår plattform gir en effektiv måte for
              bedrifter å engasjere seg med en mangfoldig gruppe studenter og
              styrke sitt tilstedeværelse på campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
