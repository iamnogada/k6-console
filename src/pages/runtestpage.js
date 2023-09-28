import React, { useRef } from "react";

import Editor from "@monaco-editor/react";

function RunTest() {
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const initialCode = 'const message = "Hello, World!";';
  const handleCodeChange = (newCode) => {
    console.log(newCode);
  };

  const handleRequest = async () => {
    const result = await fetch("/api");
    const body = await result.json();
    console.log(body);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div>
        {/* Content for the first row */}
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Jobs:</label>
            <div className="relative inline-block">
              <input
                type="number"
                className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                min="0"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Virtual Users:</label>
            <div className="relative inline-block">
              <input
                type="number"
                className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                min="0"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRequest}
          >
            Submit
          </button>
        </div>
      </div>
      <div
        style={{ flex: 1,  backgroundColor: "white" }}
        className="mt-5 border-gray-200 border-2 p-3"
      >
        {/* Content for the second row with inner scroll */}
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      </div>
    </div>
  );
}

export default RunTest;
