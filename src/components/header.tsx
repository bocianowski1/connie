import { cookies } from "next/headers";
import Link from "next/link";
import appLogo from "../assets/appLogo.webp";
import Image from "next/image";

import { Fragment } from "react";
import LogOutButton from "./logout";

export const Header = () => {
  const loggedInAs = cookies().get("user")?.value;

  return (
    <header className="flex items-center w-full justify-between p-8 max-w-screen-2xl mx-auto">
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
        {loggedInAs ? (
          <Fragment>
            <menu>
              <li>
                <Link href={`/${loggedInAs}/utforsk`}>Utforsk</Link>
              </li>
              <li>
                <Link href={`/${loggedInAs}/dashboard`}></Link>
              </li>
            </menu>
            <LogOutButton />
          </Fragment>
        ) : (
          <Link className="text-sm font-medium" href="/logg-inn">
            Logg inn
          </Link>
        )}
      </menu>
    </header>
  );
};
