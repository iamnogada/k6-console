import React from "react";

function ScriptItem({ datetime, name, status }) {
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{datetime}</td>
        <td className="whitespace-nowrap px-6 py-4">{name}</td>
        <td className="whitespace-nowrap px-6 py-4">{status}</td>
        <td className="whitespace-nowrap px-6 py-4">command</td>
      </tr>
    </>
  );
}

export default ScriptItem;
