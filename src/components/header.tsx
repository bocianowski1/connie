import { cookies } from "next/headers";
import Link from "next/link";
import appLogo from "../assets/appLogo.webp";
import Image from "next/image";

import LogOutButton from "./logout";

export const Header = () => {
  const loggedIn = cookies().get("user")?.value;

  return (
    <header className="flex relative items-center w-full justify-between py-14 px-8 max-w-screen-2xl mx-auto">
      <div className="flex gap-2 items-center absolute left-0 px-4 translate-x-1/2">
        <Image
          src={appLogo}
          width={1000}
          height={1000}
          alt="Connie"
          className="h-8 w-auto"
        />
        <div>
          <a className="font-serif font-medium text-3xl" href="/">
            Connie
          </a>
        </div>
      </div>

      {Boolean(loggedIn) && (
        <menu className="absolute flex items-center left-1/2 -translate-x-1/2 px-4">
          <HeaderItem href={`/${loggedIn}/utforsk`}>Utforsk</HeaderItem>
          <HeaderItem href={`/${loggedIn}/dashboard`}>Dashboard</HeaderItem>
        </menu>
      )}

      <div className="absolute right-0 px-4 -translate-x-1/2">
        {loggedIn ? (
          <LogOutButton />
        ) : (
          <Link
            className="bg-primary font-medium flex flex-row h-10 items-center justify-center px-4 text-white w-fit rounded-lg gap-4"
            href="/logg-inn"
          >
            Logg inn
          </Link>
        )}
      </div>
    </header>
  );
};

export const HeaderItem = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <li>
      <Link
        className="px-4 py-2 rounded-full hover:bg-gray-200 transition-all hover:underline"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
