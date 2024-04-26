export const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div>
        <a className="font-serif font-medium text-2xl" href="/">
          Connie
        </a>
      </div>

      <menu>
        <li>
          <a className="text-sm font-medium" href="/login">
            Logg inn
          </a>
        </li>
      </menu>
    </header>
  );
};
