import CodeTemplate from "../../components/CodeTemplate";
import {
  dmSans,
  inter,
  josefinSans,
  lato,
  Montserrat,
  outfit,
  poppins,
  roboto,
  spaceGrotesk,
  workSans,
} from "./tailwindData";

const FontLinks = () => {
  return (
    <div className="space-y-4">
      <CodeTemplate title={"01. Inter"} ln="css" codeBlock={inter} />
      <CodeTemplate
        title={"02. Space Grotesk"}
        ln="css"
        codeBlock={spaceGrotesk}
      />
      <CodeTemplate title={"03. Work Sans"} ln="css" codeBlock={workSans} />
      <CodeTemplate title={"04. DM Sans"} ln="css" codeBlock={dmSans} />
      <CodeTemplate title={"05. Poppins"} ln="css" codeBlock={poppins} />
      <CodeTemplate title={"06. Lato"} ln="css" codeBlock={lato} />
      <CodeTemplate
        title={"07. Josefin Sans"}
        ln="css"
        codeBlock={josefinSans}
      />
      <CodeTemplate title={"08. Montserrat"} ln="css" codeBlock={Montserrat} />
      <CodeTemplate title={"09. Roboto"} ln="css" codeBlock={roboto} />
      <CodeTemplate title={"10. Outfit"} ln="css" codeBlock={outfit} />
    </div>
  );
};

export default FontLinks;
