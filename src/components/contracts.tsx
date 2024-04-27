import Image from "next/image";
import Link from "next/link";
import type { Bedrift, Linjeforening } from "@/data";

export const Contracts = ({
  data,
  className,
}: {
  data: Array<Bedrift | Linjeforening>;
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-1 gap-4 w-full ${className}`}>
      {data.map((d) => {
        return (
          <div
            key={d.name}
            className="p-4 flex flex-col gap-4 justify-between rounded-2xl bg-offwhite border border-gray-500"
          >
            <div>
              <h3 className="text-2xl text-balance font-serif font-medium">
                Bedriftspresentasjon desember
              </h3>
              <h4 className="text-gray-500 text-sm">Ingått: 20.10.2023</h4>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-1 size-20 rounded-full border border-gray-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={`/${
                    d.type === "bedrift" ? "bedrifter" : "linjeforeninger"
                  }/${d.id}.${d.id === "echo" ? "webp" : "png"}`}
                  width={100}
                  height={100}
                  alt={d.name}
                  className="object-fill w-full scale-75"
                />
              </div>
              <div className="col-span-11">
                <h3 className="text-2xl font-serif font-medium">{d.name}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  {d.sectors.map((s, i) => (
                    <span key={s} className="capitalize">
                      {s}
                      {i === d.sectors.length - 1 ? "" : ","}
                    </span>
                  ))}
                </div>
                <p className="flex items-center gap-1 text-gray-500 text-sm">
                  {d.locations[0]}
                </p>
              </div>
            </div>
            <Link
              href={`/${
                d.type === "bedrift" ? "bedrift" : "linjeforening"
              }/dashboard`}
              className="primary-button w-fit"
            >
              Se kontrakt
            </Link>
          </div>
        );
      })}
    </div>
  );
};
