import "./css/index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./components/NotFound.jsx";
import { routes } from "./routes/Routes.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {routes.map(({ id, path, Element }) => (
          <Route index={id === 0} key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
