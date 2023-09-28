import React, { useState } from "react";

import ScriptItem from "../components/ScriptItem";

function ScriptsPage() {
  const [scripts, setScripts] = useState([]);

  const refreshScripts = async () => {
    const result = await fetch("/api/script");
    const body = await result.json();
    setScripts(body);
  }
  
  return (
    <div className="flex flex-col justify-stretch">
      <div className=" flex flex-row text-base/6 border-2 border-purple-600 ">
        <div className="grow">Performance Test Result List</div>
        <div className="flex-non mr-5">
          <button className="bg-purple-600 text-white px-2 py-1 rounded-md" onClick={refreshScripts}>
            Refresh
          </button>
        </div>
      </div>
      <div className="mt-3 border-rose-600 border-2">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
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
                        key={script.datetime}
                        datetime={script.datetime}
                        name={script.name}
                        status={script.status}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScriptsPage;
