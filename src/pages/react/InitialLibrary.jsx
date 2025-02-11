import CodeTemplate from "../../components/CodeTemplate";
import { folderStructure, installRouter, setupAppJsx, setupMainJsx, setupRouteJs } from "./reactData";

const InitialLibrary = () => {

  return (
    <div className="space-y-4">
      <CodeTemplate title="Terminal" codeBlock={folderStructure} ln="bash" />
      <CodeTemplate title="Terminal" codeBlock={installRouter} ln="bash" />
      <CodeTemplate title="main.jsx" codeBlock={setupMainJsx} ln="jsx" />
      <CodeTemplate title="app.jsx" codeBlock={setupAppJsx} ln="jsx" />
      <CodeTemplate title="route.js" codeBlock={setupRouteJs} ln="javascript" />
    </div>
  );
};

export default InitialLibrary;
