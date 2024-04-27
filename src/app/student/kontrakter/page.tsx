import { Contracts } from "@/components";
import { bedrifter } from "@/data";
import Link from "next/link";

export default function Kontrakter() {
  return (
    <div className="px-32 w-full space-y-8 pb-12 max-w-screen-2xl">
      <h1 className="text-5xl text-balance font-serif font-medium">
        Kontrakter
      </h1>
      <div>
        <Link href="/student/kontrakter/ny" className="primary-button">
          Inngå ny kontrakt
        </Link>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl text-balance font-serif font-medium">
          Tidligere avtaler
        </h2>
        <Contracts data={bedrifter} />
      </div>
    </div>
  );
}
