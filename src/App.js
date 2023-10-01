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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DynamicPage />} />
          <Route path="/runtest" element={<DynamicPage />} />
          <Route path="/scripts" element={<DynamicPage />} />
          {/* And so on... */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
