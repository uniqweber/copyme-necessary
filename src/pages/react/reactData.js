/* ----------------------------- initial Library || With router ---------------------------- */
export const folderStructure = `cd src
rm -f App.css index.css
rm -rf assets
mkdir -p app features assets/css assets/icons assets/images components/shared components/UI hooks context pages routes utils/data 
touch routes/routes.js pages/Home.jsx pages/About.jsx utils/data/navData.js utils/constants.js utils/helper.js .env assets/css/index.css components/shared/Navbar.jsx components/shared/Footer.jsx components/shared/Layout.jsx`;

export const installRouter = `npm install react-router
npm install react-icons --save 
npm install @reduxjs/toolkit react-redux
`;
export const setupMainJsx = `import "./assets/css/index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
`;

export const setupAppJsx = `import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
const App = () => {
  return (
    <>
      {/* Wrap with Layout */}
      <Routes>
        {routes.map(({ path, Element, id, subRoute }) => (
          <Route key={id} path={path} element={<Element />}>
            {subRoute &&
              subRoute.map(({ id, index, path, Element }) => (
                <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}></Route>
              ))}
          </Route>
        ))}
      </Routes>
      {/* Wrap with Layout */}
    </>
  );
};
export default App;
`;

export const setupRouteJs = `export const routes = [
  { id: 1, path: "", Element: "" },
  {
    id: 2,
    path: "",
    Element: "",
    subRoute: [
      { id: 6, index: true, Element: "" },
      { id: 6, path: "", Element: "" },
      {
        id: 7,
        path: "",
        Element: "",
        childrenSubRoute: [
          { id: 8, index: true, Element: "" },
          { id: 9, path: "", Element: "" },
        ],
      },
    ],
  },
  { id: 15, path: "*", Element: "" },
];
`;

/* ----------------------------- without router ----------------------------- */
export const withoutRouterFolderStructure = `cd src
rm -f App.css index.css
rm -rf assets
mkdir -p app features assets/css assets/icons assets/images components/shared components/UI hooks context pages utils/data
touch utils/data/navData.js pages/Home.jsx pages/About.jsx utils/constants.js utils/helper.js .env assets/css/index.css components/shared/Navbar.jsx components/shared/Footer.jsx components/shared/Layout.jsx`;

export const installDependencies = `npm install react-icons --save`;
export const reSetupMain = `import "./assets/css/index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);`;

/* ------------------------------ repeated code ----------------------------- */
export  const toggleTheme = `const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  
useEffect(() => {
const themeClass = "dark";
document.documentElement.classList.toggle(themeClass, isDarkMode);
localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}, [isDarkMode]);`;
export const addInCss = `@custom-variant dark (&:where(.dark, .dark *));`;