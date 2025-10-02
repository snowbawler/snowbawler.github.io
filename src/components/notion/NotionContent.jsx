import React, { useEffect } from "react";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import ReactModal from "react-modal";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const components = {
  Code,
  Collection,
  Equation,
  Modal: ReactModal,
};

export default function NotionContent({ recordMap, fullPage = false, darkMode = false }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    ReactModal.setAppElement("#root");

    return undefined;
  }, []);

  if (!recordMap) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={fullPage}
      darkMode={darkMode}
      components={components}
    />
  );
}
