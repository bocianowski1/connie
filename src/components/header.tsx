import { cookies } from "next/headers";

export const Header = () => {
  const loggedInAs = cookies().get("user");

  return (
    <header className="flex items-center justify-between p-8 max-w-screen-2xl mx-auto">
      <div>
        <a className="font-serif font-medium text-3xl" href="/">
          Connie
        </a>
      </div>

      <menu>
        <li>
          {loggedInAs ? (
            <a className="text-sm font-medium" href="/logg-ut">
              Logg ut
            </a>
          ) : (
            <a className="text-sm font-medium" href="/logg-inn">
              Logg inn
            </a>
          )}
        </li>
      </menu>
    </header>
  );
};
