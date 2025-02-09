import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const themeClass = "dark";
    document.documentElement.classList.toggle(themeClass, isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-between px-6 ">
      <h5 className="text-dark dark:text-light smooth-transition font-mono text-lg font-bold tracking-wider">
        {"<CopyMe/>"}
      </h5>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className=" w-8 h-8 rounded-full bg-secondary-light dark:bg-secondary-dark text-dark dark:text-light smooth-transition border border-gray-300 dark:border-white/20 text-sm"
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </div>
  );
};

export default NavBar;
