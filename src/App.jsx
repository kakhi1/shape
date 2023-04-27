import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black  flex items-center">
        <div className="bg-[url('./assets/shape.svg')] bg-no-repeat w-screen h-screen text-white flex flex-col md:ml-14 ml-6">
          <div className="w-full h-[10%] flex items-start justify-start ml-40 mt-14">
            <h1 className="text-2xl font-normal">TOTAL TOKENS</h1>
          </div>
          <div className="flex flex-row  w-full h-[90%] justify-around items-start mt-20">
            <div className="flex flex-col gap-20 ">
              <h1 className="text-2xl font-normal">Current</h1>
              <span className="text-5xl font-extrabold">429</span>
            </div>
            <div className="flex flex-col gap-20 ">
              <h1 className="text-2xl font-normal">Total</h1>
              <span className="text-5xl font-extrabold">5061</span>
            </div>
            <div className="flex flex-col gap-20 ">
              <h1 className="text-2xl font-normal">Usage</h1>
              <span className="text-5xl font-extrabold">4534</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
