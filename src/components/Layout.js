import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col h-[95vh]">
      <header className="bg-primary text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to={"/"} className="hover:text-primary-400">K6 Project</Link>
            </li>
            
          </ul>
          <ul className="flex space-x-4">
            <li><Link to={"/"}>Logout</Link></li>
          </ul>
        </div>
      </header>

      <div className="container mx-auto mt-4 flex flex-grow">
        <aside className="w-1/6 bg-gray-300 p-4">
          <ul>
            <li>
              <Link to="/runtest" className="block mb-2 hover:text-secondary-800">
                Run Test
              </Link>
            </li>
            <li>
              <Link to="/script" className="block mb-2 hover:text-secondary-800">
                Script
              </Link>
            </li>
            <li>
              <Link to="/sample" className="block mb-2 hover:text-secondary-800">
                Sample
              </Link>
            </li>
            <li>
              <Link to="/todo" className="block mb-2 hover:text-secondary-800">
                ToDo
              </Link>
            </li>
            <li>
              <Link to="/newtodo" className="block mb-2 hover:text-secondary-800">
                ToDo(State)
              </Link>
            </li>
          </ul>
        </aside>

        <main className="w-5/6  bg-white p-4  border border-gray-300 ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
