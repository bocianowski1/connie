import Link from "next/link";
import appLogo from "../assets/appLogo.webp";
import Image from "next/image";

const items = [
  {
    name: "Finn nyutdannede",
    href: "/finn-nyutdannede",
  },
  {
    name: "Bli med",
    href: "/",
  },
  {
    name: "Logg inn",
    href: "/logg-inn",
  },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-8 max-w-screen-2xl mx-auto">
      <div className="flex gap-2 items-center">
        <Image
          src={appLogo}
          width={1000}
          height={1000}
          alt="na"
          className="h-8 w-auto"
        />
        <div>
          <a className="font-serif font-medium text-3xl" href="/">
            Connie
          </a>
        </div>
      </div>
      <menu>
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-4 py-2 rounded-full hover:bg-gray-300 transition-all"
          >
            {item.name}
          </Link>
        ))}
      </menu>
    </header>
  );
};
