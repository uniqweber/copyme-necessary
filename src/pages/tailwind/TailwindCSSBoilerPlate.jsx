import CodeTemplate from "../../components/CodeTemplate";
import ColorPalate from "./ColorPalate";
import { mostUsedColors, palette1, palette2, palette3 } from "./tailwindData";

const TailwindCSSBoilerPlate = () => {
  return (
    <div className="space-y-4">
      {[mostUsedColors, palette1, palette2, palette3].map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-10 ">
          <CodeTemplate
            title={`Color Palette - ${(index + 1).toString().padStart(2, "0")}`}
            codeBlock={`${item.map(
              (color) => `--${color.name}: ${color.value};`
            )}`}
            ln="css"
          />
          <ColorPalate colors={item} />
        </div>
      ))}
    </div>
  );
};

export default TailwindCSSBoilerPlate;
