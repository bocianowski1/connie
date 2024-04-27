import Image from "next/image";
import type { Bedrift, Linjeforening } from "@/data";

export const Browse = ({
  data,
  className,
}: {
  data: Array<Bedrift | Linjeforening>;
  className?: string;
}) => {
  return (
    <ul className={`flex flex-col w-full ${className}`}>
      {data.map((d) => {
        return (
          <li
            key={d.name}
            className="p-4 border-b border-b-gray-500 flex justify-between"
          >
            <div className="flex items-center gap-4">
              <Image
                src={`/${
                  d.type === "bedrift" ? "bedrifter" : "linjeforeninger"
                }/${d.id}.${d.id === "echo" ? "webp" : "png"}`}
                width={100}
                height={100}
                alt={d.name}
                className="h-16 w-16 object-cover rounded-full border border-gray-500"
              />
              <div>
                <h3 className="text-2xl font-serif font-medium">{d.name}</h3>
                <div className="flex items-center">
                  {d.locations.map((l, i) => (
                    <span key={l}>
                      {l}
                      {i === d.locations.length - 1 ? "" : ","}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pr-8">
              <button className="bg-primary text-white py-2 px-4 rounded-lg">
                Ta kontakt
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
