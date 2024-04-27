export type Linjeforening = {
  name: string;
  id: string;
  sectors: Array<Sector>;
  locations: Location[];
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

export type Location =
  | "Oslo"
  | "Bergen"
  | "Trondheim"
  | "Stavanger"
  | "Tromsø"
  | "Kristiansand"
  | "Gjøvik"
  | "Ålesund"
  | "Halden"
  | "Molde"
  | "New York"
  | "London"
  | "Amsterdam"
  | "Shanghai";

export const linjeforeninger = [
  {
    name: "echo – Linjeforeningen for informatikk",
    id: "echo",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
    locations: ["Bergen"],
  },
  {
    name: "Online – Linjeforeningen for informatikk",
    id: "online",
    sectors: ["teknologi", "informatikk"],
    locations: ["Trondheim"],
  },
  {
    name: "Abakus – Retards",
    id: "abakus",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
    locations: ["Trondheim"],
  },
  {
    name: "Helix – Linjeforeningen for bioteknologi og kjemi",
    id: "helix",
    sectors: ["biologi"],
    locations: ["Bergen"],
  },
  {
    name: "Hippodamus – Linjeforeningen for arkitektur og design",
    id: "hippodamus",
    sectors: ["design", "arkitektur"],
    locations: ["Oslo"],
  },
  {
    name: "Mjølnir — Linjeforening for geologi og geofysikk",
    id: "mjolnir",
    sectors: ["energi", "geologi"],
    locations: ["Ålesund"],
  },
] satisfies Array<Linjeforening>;

export type Bedrift = {
  name: string;
  id: string;
  sectors: Sector[];
  locations: Location[];
};

export const bedrifter = [
  {
    name: "Bekk",
    id: "bekk",
    sectors: ["teknologi", "informatikk"],
    locations: ["Oslo", "Trondheim"],
  },
  {
    name: "DNB",
    id: "dnb",
    sectors: ["økonomi", "finans"],
    locations: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"],
  },
  {
    name: "DrDropin",
    id: "drdropin",
    sectors: ["helse"],
    locations: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"],
  },
  {
    name: "Equinor",
    id: "equinor",
    sectors: ["energi"],
    locations: ["Stavanger"],
  },
  {
    name: "Sopra Steria",
    id: "soprasteria",
    sectors: ["teknologi", "informatikk"],
    locations: ["Oslo", "Trondheim", "Bergen"],
  },
  {
    name: "Optiver",
    id: "optiver",
    sectors: ["finans"],
    locations: ["Amsterdam", "London", "New York", "Shanghai"],
  },
  {
    name: "TV2",
    id: "tv2",
    sectors: ["media"],
    locations: ["Oslo", "Bergen", "Molde", "Ålesund"],
  },
] satisfies Array<Bedrift>;
