import React, { useState } from 'react';

interface CodeWindowProps {
  code: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="code-window">
      <button
        className={`copy-button ${isCopied ? 'copied' : ''}`}
        onClick={copyCodeToClipboard}
        disabled={isCopied}
      >
        {isCopied ? 'Copied!' : 'Copy Code'}
      </button>
      <pre>{code}</pre>
    </div>
  );
};

export default CodeWindow;
