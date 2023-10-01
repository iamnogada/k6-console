import React from "react";
import ColorSet from "../components/ui/ColorSet";
import ColorSetUI from "../components/ui/ColorSetUI";
import CardSet from "../components/ui/CardSet";

function SamplePage() {
  return (
    <div>
      <h1 className="m-2 bg-gray-400">Sample Page</h1>
      <ColorSet/>
      <ColorSetUI/>
      <CardSet/>
    </div>
  );
}

export default SamplePage;
