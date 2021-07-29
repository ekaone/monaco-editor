import React from "react";
import Editor from "@monaco-editor/react";

function Monaco() {
  return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  );
}

export default Monaco;
