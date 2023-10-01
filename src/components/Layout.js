import React from "react";
import { Link,useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
    <header className="bg-primary text-white py-2">
        <nav className="container mx-auto">
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-primary-400">K6 Project</a></li>
                <li><a href="#" className="hover:text-primary-400">UI Sample</a></li>
                <li><a href="#" className="hover:text-primary-400">About</a></li>
            </ul>
        </nav>
    </header>

    <div className="container mx-auto mt-4 flex">
        <aside className="w-1/6 bg-secondary-300 p-4">
            <ul>
                <li><a href="#" className="block mb-2 hover:text-secondary-800">Run Test</a></li>
                <li><a href="#" className="block mb-2 hover:text-secondary-800">Profile</a></li>
                <li><a href="#" className="block mb-2 hover:text-secondary-800">Settings</a></li>
                <li><a href="#" className="block hover:text-secondary-800">Logout</a></li>
            </ul>
        </aside>

        <main className="w-5/6 bg-white p-4 overflow-y-auto border border-secondary-300">
            <div className="max-h-96 overflow-y-auto">
                {children}
            </div>
        </main>
    </div>
    </>
  );
}

export default Layout;
