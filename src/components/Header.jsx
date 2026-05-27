import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="top-0 z-10 sticky flex justify-between items-center bg-white dark:bg-black px-16 h-28 text-black dark:text-white">
      <img
        src="/image/logo.svg"
        alt="logo"
        width={64}
        className="invert dark:invert-0"
      />
      <div className="flex gap-4">
        <Link to="/">
          <span className="font-extralight text-2xl hover:underline">
            Главная
          </span>
        </Link>
        <Link to="/about">
          <span className="font-extralight text-2xl hover:underline">
            О нас
          </span>
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
