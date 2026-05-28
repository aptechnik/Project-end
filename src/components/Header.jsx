import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="top-0 z-10 sticky bg-white dark:bg-black text-black dark:text-white">
      <div className="flex justify-between items-center px-3 sm:px-4 md:px-6 xl:px-8 py-2 h-28 max-w-7xl mx-auto">
        <Link to="/">
          <img
            src="/image/logo.svg"
            alt="logo"
            width={64}
            className="invert dark:invert-0 w-12 sm:w-14 md:w-16"
          />
        </Link>
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <Link to="/">
            <span className="font-extralight text-lg sm:text-xl lg:text-2xl hover:underline">
              Главная
            </span>
          </Link>
          <Link to="/about">
            <span className="font-extralight text-lg sm:text-xl lg:text-2xl hover:underline">
              О нас
            </span>
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
