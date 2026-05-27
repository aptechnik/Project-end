import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center bg-zinc-300 dark:bg-zinc-700 rounded-full w-16 h-9 transition-colors duration-300"
    >
      <span className="left-1 absolute text-zinc-700 dark:text-zinc-200">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </span>

      <span className="right-1 absolute text-zinc-700 dark:text-zinc-200">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.9 12.6A9 9 0 1 1 11.4 3.1a7 7 0 0 0 9.5 9.5z" />
        </svg>
      </span>

      <div
        className={`
          absolute top-1 left-1 w-7 h-7 rounded-full bg-white dark:bg-zinc-900
          shadow-md transition-transform duration-300
          ${isDark ? "translate-x-7" : "translate-x-0"}
        `}
      />
    </button>
  );
}
