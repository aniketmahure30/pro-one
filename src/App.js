import React, { Suspense, lazy } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const DemoApp = lazy(() => import("proTwo/Demo"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">REACT APP ONE</div>
        <RouterProvider router={router} />
        <Suspense fallback={<div>Loading...</div>}>
          <DemoApp />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
