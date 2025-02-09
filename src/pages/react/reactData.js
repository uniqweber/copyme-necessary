/* ----------------------------- initial library ---------------------------- */
export const folderStructure = `cd src
rm -f App.css index.css
rm -rf assets
mkdir -p assets/css assets/icons assets/images components/shared components/UI hooks pages routes utils
touch routes/routes.js utils/constants.js utils/helper.js .env assets/css/index.css`;

export const installRouter = `npm install react-router
npm install react-icons --save
`;
export const setupMainJsx = `import "./assets/css/index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);`;
