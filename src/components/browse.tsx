import type { Bedrift, Linjeforening } from "@/data";

export const Browse = ({ data }: { data: Array<Bedrift | Linjeforening> }) => {
  return (
    <div className="flex flex-col w-full">
      {data.map((d) => {
        return (
          <div key={d.name}>
            <h3>{d.name}</h3>
            <div className="flex items-center">
              {d.sectors.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
