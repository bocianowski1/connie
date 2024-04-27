import { Browse } from "@/components";
import { linjeforeninger } from "@/data";

export const UtforskForStudenter = () => {
  return (
    <div>
      <h1>Utforsk Bedrifter</h1>
      <Browse data={linjeforeninger} />
    </div>
  );
};
