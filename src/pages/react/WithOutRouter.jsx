import CodeTemplate from "../../components/CodeTemplate";
import {
  installDependencies,
  reSetupMain,
  withoutRouterFolderStructure,
} from "./reactData";

const WithOutRouter = () => {
  return (
    <div className="space-y-2">
      <CodeTemplate
        title="Terminal"
        codeBlock={withoutRouterFolderStructure}
        ln="bash"
      />
      <CodeTemplate
        title="Terminal"
        codeBlock={installDependencies}
        ln="bash"
      />
      <CodeTemplate title="Terminal" codeBlock={reSetupMain} ln="bash" />
    </div>
  );
};

export default WithOutRouter;
