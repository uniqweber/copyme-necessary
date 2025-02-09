import { faCopy, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const pages = [
  {
    path: "/",
    name: "Home",
    content: "Welcome to the Documentation!",
    titles: ["Introduction", "Getting Started"],
  },
  {
    path: "/page1",
    name: "Page 1",
    content: "This is Page 1",
    titles: ["Section 1", "Section 2"],
  },
  {
    path: "/page2",
    name: "Page 2",
    content: "This is Page 2",
    titles: ["Overview", "Details"],
  },
  {
    path: "/gadharam",
    name: "Gadharam",
    content: "This is the Gadharam document.",
    titles: ["Gadharam History", "Legacy"],
  },
];

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <nav className="w-64 p-4 bg-gray-200 dark:bg-gray-800">
          <h2 className="text-xl font-bold mb-4">Docs</h2>
          {pages.map((page) => (
            <SidebarLink key={page.path} to={page.path} label={page.name} />
          ))}
        </nav>

        {/* Main Content & Right Sidebar */}
        <div className="flex-1 flex">
          <div className="flex-1 p-6 relative">
            {/* Theme Toggle */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>

            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={<Page page={page} />}
                />
              ))}
            </Routes>
          </div>

          {/* Right Sidebar (Title Navigation) */}
          <nav className="w-64 p-4 bg-gray-200 dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-4">On This Page</h2>
            <RightSidebar />
          </nav>
        </div>
      </div>
    </Router>
  );
}

function SidebarLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`block p-2 rounded ${
        isActive ? "bg-blue-500 text-white" : "text-gray-700 dark:text-gray-300"
      }`}
    >
      {label}
    </Link>
  );
}

function Page({ page }) {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{page.content}</h1>
      {page.titles.map((title, index) => (
        <h2 key={index} id={title} className="text-xl font-semibold mt-4">
          {title}
        </h2>
      ))}

      {/* Code Blocks */}
      <CodeBlock code={`const hello = "Hello, World!";\nconsole.log(hello);`} />
      <CodeBlock code={`function add(a, b) {\n  return a + b;\n}`} />

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        {currentIndex > 0 && (
          <Link
            to={pages[currentIndex - 1].path}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
          >
            Previous
          </Link>
        )}
        {currentIndex < pages.length - 1 && (
          <Link
            to={pages[currentIndex + 1].path}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

function RightSidebar() {
  const location = useLocation();
  const page = pages.find((p) => p.path === location.pathname);

  return (
    <div>
      {page?.titles.map((title, index) => (
        <a
          key={index}
          href={`#${title}`}
          className="block p-2 text-gray-700 dark:text-gray-300 hover:underline"
        >
          {title}
        </a>
      ))}
    </div>
  );
}

function CodeBlock({ code }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative my-4">
      <button
        className="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 p-1 rounded"
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={faCopy} />
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="rounded-lg p-3"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
