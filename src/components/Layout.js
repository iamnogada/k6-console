import React from "react";
import { Link,useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100 mb-10">
      {/* <!-- Sidebar / Navigation --> */}
      <div className="bg-white w-64 p-6 hidden sm:block">
        <div className="text-xl mb-4 text-primary font-bold">
          <Link to="/">K6 Console</Link>
        </div>

        <ul className="mt-14">
          <li className="mb-2">
            <Link to="/scripts" className=" text-primary font-semibold hover:text-gray-800">
              Scripts
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/runtest" className="text-primary font-semibold hover:text-gray-800">
              Run Test
            </Link>
          </li>
        </ul>
      </div>

      {/* <!-- Main Content --> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <!-- Top Bar --> */}
        <header className="bg-white p-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">{location.pathname}</div>
            <div className="flex items-center">
              <div className="text-primary font-bold">KloudBank</div>
            </div>
          </div>
        </header>

        {/* <!-- Content Area --> */}
        <main className="flex-grow p-6 mb-10">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
