import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

function DynamicPage() {
  let location = useLocation();
  if("/" === location.pathname || "" ===location.pathname){
    location.pathname = "/main";
  }
  const PageComponent = lazy(() =>
    import(`./pages/${location.pathname.slice(1)}page`)
  );
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <PageComponent />
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicPage />} />
          <Route path="/runtest" element={<DynamicPage />} />
          <Route path="/script" element={<DynamicPage />} />
          <Route path="/sample" element={<DynamicPage />} />
          <Route path="/todo" element={<DynamicPage />} />
          <Route path="/newtodo" element={<DynamicPage />} />
          {/* And so on... */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
