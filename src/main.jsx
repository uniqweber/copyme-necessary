import "./css/index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./components/NotFound.jsx";
import TailwindInstallation from "./pages/tailwind/Installation.jsx";
import TailwindCSSBoilerPlate from "./pages/tailwind/TailwindCSSBoilerPlate.jsx";
import FontLinks from "./pages/tailwind/FontLinks.jsx";
import InitialLibrary from "./pages/react/InitialLibrary.jsx";
import RepeatedCode from "./pages/react/RepeatedCode.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TailwindInstallation />} />
        <Route path="/css-boiler" element={<TailwindCSSBoilerPlate />} />
        <Route path="/font-family" element={<FontLinks />} />
        <Route path="/must-have-library" element={<InitialLibrary />} />
        <Route path="/repeated-codes" element={<RepeatedCode />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
