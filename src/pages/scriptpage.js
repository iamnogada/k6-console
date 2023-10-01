import React, { useState, useEffect, useRef } from "react";

import ScriptItem from "../components/ScriptItem";

function ScriptsPage() {
  const effecRunning = useRef(false);
  const [scripts, setScripts] = useState([]);
  const [currentStart, setCurrentStart] = useState(0);
  const [currentEnd, setCurrentEnd] = useState(20);

  const refreshScripts = async () => {
    const result = await fetch(
      `/api/script?start=0&end=${currentEnd}`
    );
    const body = await result.json();
    setScripts(body.data);
  };
  useEffect(() => {
    if (effecRunning.current === true) {
      const fetchScripts = async () => {
        const result = await fetch(
          `/api/script?start=${currentStart}&end=${currentEnd}`
        );
        const body = await result.json();
        setScripts((prev) => prev.concat(body.data));
      };
      fetchScripts();
      console.log("fetch scripts");
      
    }
    return () => {
      effecRunning.current = true;
    };
  }, [currentStart,currentEnd]);

  const appendScripts = async () => {
    setCurrentStart(currentEnd);
    setCurrentEnd(currentEnd + 20);
  };

  return (
    <div className="flex flex-col  h-full divide-y divide-dashed">
      <div className=" flex flex-row text-base/6 ">
        <div className="grow">Performance Test Result List</div>
        <div className="flex-non mr-5">
          <button
            className="bg-primary-600 text-white px-2 py-1 rounded-md"
            onClick={refreshScripts}
          >
            Refresh
          </button>
        </div>
      </div>
      <div className="flex-grow h-[50vh] overflow-y-auto mt-3 ">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                id
              </th>
              <th scope="col" className="px-6 py-4">
                Date time
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
              <th scope="col" className="px-6 py-4">
                Command
              </th>
            </tr>
          </thead>
          <tbody>
            {scripts.map((script) => (
              <ScriptItem
                key={script.id}
                id={script.id}
                date={script.date}
                name={script.name}
                status={script.status}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center pt-6">
        <button
          onClick={appendScripts}
          className=" w-2/4 bg-gray-300 hover:text-primary-600"
        >
          {" "}
          More{" "}
        </button>
      </div>
    </div>
  );
}

export default ScriptsPage;
