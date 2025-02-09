import InitialLibrary from "../pages/react/InitialLibrary";
import RepeatedCode from "../pages/react/RepeatedCode";
import WithOutRouter from "../pages/react/WithOutRouter";
import FontLinks from "../pages/tailwind/FontLinks";
import Installation from "../pages/tailwind/Installation";
import TailwindCSSBoilerPlate from "../pages/tailwind/TailwindCSSBoilerPlate";

export const navRoute = [
  {
    title: "React",
    subLink: [
      {
        link: " With Router",
        path: "",
      },
      {
        link: " Without Router",
        path: "without-router",
      },
      {
        link: "Repeated Codes",
        path: "repeated-codes",
      },
    ],
  },
  {
    title: "Tailwind",
    subLink: [
      {
        link: "Installation",
        path: "tailwind-installation",
      },
      {
        link: "Font Family",
        path: "font-family",
      },
      {
        link: "CSS Boiler Plate",
        path: "css-boiler",
      },
    ],
  },
];

export const routes = [
  { id: 1, path: "", Element: InitialLibrary },
  { id: 2, path: "repeated-codes", Element: RepeatedCode },
  { id: 3, path: "tailwind-installation", Element: Installation },
  { id: 4, path: "css-boiler", Element: TailwindCSSBoilerPlate },
  { id: 5, path: "font-family", Element: FontLinks },
  { id: 6, path: "without-router", Element: WithOutRouter },
];
