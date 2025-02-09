import React, { Suspense } from "react";
import { lazy } from "react";

const LazyComponent = lazy(() => import("./LazyChild"));

function Lazyloading() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <h1>Bottom Data</h1>
      <p>Hello i am Chandan Kumar Singh</p>
    </div>
  );
}

export default Lazyloading;
