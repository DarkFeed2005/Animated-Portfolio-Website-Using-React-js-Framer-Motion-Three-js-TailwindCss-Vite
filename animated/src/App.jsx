import React, { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ThreeBackground from "./components/ThreeBackground";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <ThreeBackground />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          
          <div class= "h-[500px] text-white">Hello Kalana</div>
        </Suspense>
      </div>
    </div>
  );
}