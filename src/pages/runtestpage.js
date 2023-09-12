import React from "react";
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/ace";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';


function RunTest() {

  const initialCode = 'const message = "Hello, World!";';
  const handleCodeChange = (newCode) => {
    console.log(newCode);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
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
          >
            Submit
          </button>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", backgroundColor: "white" }} className="mt-5">
        {/* Content for the second row with inner scroll */}
        <div style={{ height: "100%" }}>
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={initialCode}
          onChange={handleCodeChange}
          width="100%"
          height="100%"
          editorProps={{ $blockScrolling: true }}
        />
        </div>
      </div>
    </div>
  );
}

export default RunTest;
