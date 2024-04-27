export type Linjeforening = {
  name: string;
  id: string;
  sectors: Array<Sector>;
};

export type Sector =
  | "teknologi"
  | "informatikk"
  | "datasikkerhet"
  | "økonomi"
  | "finans"
  | "energi"
  | "media"
  | "helse"
  | "forsvar"
  | "forskningsinstitutt"
  | "offentlig"
  | "biologi"
  | "arkitektur"
  | "design"
  | "geologi"
  | "annet";

export const linjeforeninger = [
  {
    name: "echo – Linjeforeningen for informatikk",
    id: "echo",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
  },
  {
    name: "Online – Linjeforeningen for informatikk",
    id: "online",
    sectors: ["teknologi", "informatikk"],
  },
  {
    name: "Abakus – Retards",
    id: "abakus",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
  },
  {
    name: "Helix – Linjeforeningen for bioteknologi og kjemi",
    id: "helix",
    sectors: ["biologi"],
  },
  {
    name: "Hippodamus – Linjeforeningen for arkitektur og design",
    id: "hippodamus",
    sectors: ["design", "arkitektur"],
  },
  {
    name: "Mjølnir — Linjeforening for geologi og geofysikk",
    id: "mjolnir",
    sectors: ["energi", "geologi"],
  },
] satisfies Array<Linjeforening>;

export type Bedrift = {
  name: string;
  id: string;
  sectors: Sector[];
};

export const bedrifter = [
  {
    name: "Bekk",
    id: "bekk",
    sectors: ["teknologi", "informatikk"],
  },
  {
    name: "DNB",
    id: "dnb",
    sectors: ["økonomi", "finans"],
  },
  {
    name: "DrDropin",
    id: "drdropin",
    sectors: ["helse"],
  },
  {
    name: "Equinor",
    id: "equinor",
    sectors: ["energi"],
  },
  {
    name: "Sopra Steria",
    id: "soprasteria",
    sectors: ["teknologi", "informatikk"],
  },
  {
    name: "Optiver",
    id: "optiver",
    sectors: ["finans"],
  },
  {
    name: "TV2",
    id: "tv2",
    sectors: ["media"],
  },
] satisfies Array<Bedrift>;
