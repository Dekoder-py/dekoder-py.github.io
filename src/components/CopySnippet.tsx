import { useState } from "react";

const snippet = `<a href="https://codingcorner.dev/">
  <img
    alt="Coding Corner"
    src="https://codingcorner.dev/buttons/codingcorner.png"
    width="88"
    height="31"
  />
</a>`;

export default function CopySnippet() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
      <button
        onClick={copy}
        className="px-2 py-1 rounded bg-macchiato-blue text-macchiato-surface-0 text-sm hover:opacity-90 transition"
      >
        {copied ? "Copied :)" : "click here to copy!"}
      </button>
  );
}

