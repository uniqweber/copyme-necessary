import CodeTemplate from "../../components/CodeTemplate";
import { configVite, importCss, installTailwind, testCss } from "./tailwindData";

const Installation = () => {
  return (
    <div className="space-y-4">
      <CodeTemplate codeBlock={installTailwind} title={"Terminal"} ln="bash" />
      <CodeTemplate codeBlock={configVite} title={"Vite.config.js"} ln="javascript" />
      <CodeTemplate codeBlock={importCss} title={"index.css"} ln="css" />
      <CodeTemplate codeBlock={testCss} title={"test.jsx"} ln="jsx" />
    </div>
  );
};

export default Installation;
