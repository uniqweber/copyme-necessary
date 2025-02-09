import CodeTemplate from "../../components/CodeTemplate";

const RepeatedCode = () => {
  const toggleTheme = `const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  
useEffect(() => {
const themeClass = "dark";
document.documentElement.classList.toggle(themeClass, isDarkMode);
localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}, [isDarkMode]);`;
const addInCss = `@custom-variant dark (&:where(.dark, .dark *));`;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <CodeTemplate
          title="toggle tailwind dark mode"
          codeBlock={toggleTheme}
          ln="jsx"
        />
        <CodeTemplate ln="css" codeBlock={addInCss}/>
      </div>
    </div>
  );
};

export default RepeatedCode;
