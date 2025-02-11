import CodeTemplate from "../../components/CodeTemplate";
import { addInCss, toggleTheme } from "./reactData";

const RepeatedCode = () => {

 
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <CodeTemplate title="toggle tailwind dark mode" codeBlock={toggleTheme} ln="jsx" />
        <CodeTemplate ln="css" codeBlock={addInCss} />
      </div>
    </div>
  );
};

export default RepeatedCode;
