import { useTheme } from "next-themes";

const ThemeManager = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="text-2xl focus:outline-none"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌞" : "🌛"}
      </button>
    </div>
  );
};

export default ThemeManager;
