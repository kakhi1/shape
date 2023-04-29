import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative bg-black p-10">
        <div className="z-30 text-white md:top-[8%] top-[7%] left-[36%] sm:left-[17%]  absolute">
          <h1 className="lg:text-2xl sm:text-xl text-xs font-normal">
            TOTAL TOKENS
          </h1>
        </div>
        <div className=" w-[100%] h-[100%] bg-[#43E5F1] border-[#43E5F1] border-[1px] flex justify-center items-center custom-shapeMobile custom-shape">
          <div className="w-[100%] h-[100%] custom-shapeMobile2 custom-shape2 text-white bg-[#060709] opacity-[99]">
            <div className="sm:flex  flex-row grid grid-cols-2 grid-rows-2 w-full h-[90%] justify-around items-start sm:my-20 my-10 gap-10 ">
              <div className="flex flex-col sm:gap-12 gap-6 md:ml-10 ">
                <h1 className="md:text-2xl text-xl font-normal">Current</h1>
                <span className="md:text-5xl text-3xl font-extrabold">429</span>
              </div>
              <div className="flex flex-col sm:gap-12 gap-6">
                <h1 className="md:text-2xl text-xl font-normal">Total</h1>
                <span className="md:text-5xl text-3xl font-extrabold">
                  5061
                </span>
              </div>
              <div className="flex flex-col sm:gap-12 gap-6 md:mr-10">
                <h1 className="md:text-2xl text-xl font-normal">Usage</h1>
                <span className="md:text-5xl text-3xl font-extrabold">
                  4534
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
