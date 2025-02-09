import CodeTemplate from "../../components/CodeTemplate";
import { folderStructure, installRouter, setupMainJsx } from "./reactData";

const InitialLibrary = () => {

  return (
    <div className="space-y-4">
      <CodeTemplate title="terminal" codeBlock={folderStructure} ln="bash" />
      <CodeTemplate title="terminal" codeBlock={installRouter} ln="bash" />
      <CodeTemplate title="main.jsx" codeBlock={setupMainJsx} ln="jsx" />
    </div>
  );
};

export default InitialLibrary;
