import React, { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          <LoadingSpinner />
        </Suspense>
      </div>
    </div>
  );
}