import Image from "next/image";
import Link from "next/link";
import type { Bedrift, Linjeforening } from "@/data";

export const Browse = ({
  data,
  className,
}: {
  data: Array<Bedrift | Linjeforening>;
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-2 gap-4 w-full ${className}`}>
      {data.map((d) => {
        return (
          <div
            key={d.name}
            className="p-4 flex flex-col justify-between rounded-2xl bg-offwhite border border-gray-500"
          >
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-3 size-20 rounded-full border border-gray-500 flex items-center justify-center overflow-hidden">
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
                <div className="col-span-9">
                  <h3 className="text-2xl font-serif font-medium">{d.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    {d.sectors.map((s, i) => (
                      <span key={s} className="capitalize">
                        {s}
                        {i === d.sectors.length - 1 ? "" : ","}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    {d.locations.map((l, i) => (
                      <span key={l}>
                        {l}
                        {i === d.locations.length - 1 ? "" : ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="max-w-[600px] py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                veritatis tenetur nesciunt perferendis quam veniam, saepe
                dolores suscipit? A consectetur ducimus similique distinctio nam
                ab!
              </p>
            </div>
            <div>
              <Link
                href={`/${
                  d.type === "bedrift" ? "bedrift" : "linjeforening"
                }/dashboard`}
                className="primary-button"
              >
                Ta kontakt
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
