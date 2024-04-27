import Link from "next/link";

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
      <div>
        <a className="font-serif font-medium text-3xl" href="/">
          Connie
        </a>
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
