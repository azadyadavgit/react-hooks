import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Component/Menu/Layout';
import UseCallbackHook from './Component/CallbackHook/UseCallbackHook';
// import UseMemoHook from './Component/MemoHook/UseMemoHook';
const UseMemoHook = React.lazy(() => import("./Component/MemoHook/UseMemoHook"));
function App() {
  return (
    <div >
      {/* <UseCallbackHook></UseCallbackHook> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="useMemo" element={<Suspense fallback={<div>Loading...</div>}>
              <UseMemoHook />
            </Suspense>} />
            <Route path="useCallback" element={<UseCallbackHook />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
