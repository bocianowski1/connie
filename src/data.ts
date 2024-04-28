export type Linjeforening = {
  name: string;
  id: string;
  sectors: Array<Sector>;
  locations: Location[];
  type: "linjeforening";
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

export const sectors = [
  "teknologi",
  "informatikk",
  "datasikkerhet",
  "økonomi",
  "finans",
  "energi",
  "media",
  "helse",
  "forsvar",
  "forskningsinstitutt",
  "offentlig",
  "biologi",
  "arkitektur",
  "design",
  "geologi",
  "annet",
] as Sector[];

export const locations = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Tromsø",
  "Kristiansand",
  "Gjøvik",
  "Ålesund",
  "Halden",
  "Molde",
  "New York",
  "London",
  "Amsterdam",
  "Shanghai",
] as Location[];

export const linjeforeninger = [
  {
    name: "echo – Linjeforeningen for informatikk",
    id: "echo",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
    locations: ["Bergen"],
    type: "linjeforening",
  },
  {
    name: "Online – Linjeforeningen for informatikk",
    id: "online",
    sectors: ["teknologi", "informatikk"],
    locations: ["Trondheim"],
    type: "linjeforening",
  },
  {
    name: "Abakus – Linjeforening for informatikk",
    id: "abakus",
    sectors: ["teknologi", "informatikk", "datasikkerhet"],
    locations: ["Trondheim"],
    type: "linjeforening",
  },
  {
    name: "Helix – Linjeforeningen for bioteknologi og kjemi",
    id: "helix",
    sectors: ["biologi"],
    locations: ["Bergen"],
    type: "linjeforening",
  },
  {
    name: "Hippodamus – Linjeforeningen for arkitektur og design",
    id: "hippodamus",
    sectors: ["design", "arkitektur"],
    locations: ["Oslo"],
    type: "linjeforening",
  },
  {
    name: "Mjølnir — Linjeforening for geologi og geofysikk",
    id: "mjolnir",
    sectors: ["energi", "geologi"],
    locations: ["Ålesund"],
    type: "linjeforening",
  },
] satisfies Array<Linjeforening>;

export type Bedrift = {
  name: string;
  id: string;
  sectors: Sector[];
  locations: Location[];
  type: "bedrift";
};

export const bedrifter = [
  {
    name: "Bekk",
    id: "bekk",
    sectors: ["teknologi", "informatikk"],
    locations: ["Oslo", "Trondheim"],
    type: "bedrift",
  },
  {
    name: "DNB",
    id: "dnb",
    sectors: ["økonomi", "finans"],
    locations: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"],
    type: "bedrift",
  },
  {
    name: "DrDropin",
    id: "drdropin",
    sectors: ["helse"],
    locations: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"],
    type: "bedrift",
  },
  {
    name: "Equinor",
    id: "equinor",
    sectors: ["energi"],
    locations: ["Stavanger"],
    type: "bedrift",
  },
  {
    name: "Sopra Steria",
    id: "soprasteria",
    sectors: ["teknologi", "informatikk"],
    locations: ["Oslo", "Trondheim", "Bergen"],
    type: "bedrift",
  },
  {
    name: "Optiver",
    id: "optiver",
    sectors: ["finans"],
    locations: ["Amsterdam", "London", "New York", "Shanghai"],
    type: "bedrift",
  },
  {
    name: "TV2",
    id: "tv2",
    sectors: ["media"],
    locations: ["Oslo", "Bergen", "Molde", "Ålesund"],
    type: "bedrift",
  },
] satisfies Array<Bedrift>;
