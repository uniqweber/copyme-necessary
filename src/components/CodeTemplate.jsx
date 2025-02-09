import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeTemplate = ({ codeBlock, title, ln }) => {
  const [copied, setCopied] = useState(false);
  const copyText = useCallback(() => {
    if (!copied) {
      window.navigator.clipboard.writeText(codeBlock);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied, codeBlock]);

  return (
    <div>
      {title && (
        <h2 className="mb-4 smooth-transition text-dark dark:text-light">
          {title}
        </h2>
      )}
      <div className=" bg-secondary-dark border smooth-transition  dark:border-white/20 rounded-2xl p-4">
        <div className="flex items-center gap-1.5 pb-3.5   relative">
          {[1, 2, 3].map((dot, index) => (
            <div
              key={dot}
              className={`h-2.5 w-2.5 rounded-full ${
                index === 0 && "bg-orange-600"
              } ${index === 1 && "bg-yellow-600"} ${
                index === 2 && "bg-green-600"
              }`}
            ></div>
          ))}
          <button className="absolute -right-3   px-3.5 py-2.5   smooth-transition">
            {copied ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 text-base"
              />
            ) : (
              <FontAwesomeIcon
                onClick={copyText}
                icon={faCopy}
                className="text-gray-400 text-sm"
              />
            )}
          </button>
        </div>

        <div className="  rounded-xl overflow-hidden">
          <SyntaxHighlighter
            wrapLongLines={true}
            language={ln}
            style={nightOwl}
            customStyle={{overflow:'hidden', margin:"0px", padding:'0px'}}
          >
            {codeBlock}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeTemplate;
