import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="max-h-[500px] max-w-[1220px] flex items-center justify-center relative bg-black p-10">
        <div className="z-30 text-white md:top-[8%] top-[10%] md:left-[18%] left-[19%]  absolute">
          <h1 className="lg:text-2xl md:text-xl text-xs  font-normal">
            TOTAL TOKENS
          </h1>
        </div>
        <div className=" w-[100%] h-[100%] bg-[#43E5F1] border-[#43E5F1] border-2 flex ju stify-center items-center custom-shape ">
          <div className="w-[100%] h-[100%] custom-shape2 text-white bg-[#060709] opacity-[99]">
            <div className="flex flex-row  w-full h-[90%] justify-around items-start my-20 ">
              <div className="flex flex-col gap-12 ml-10">
                <h1 className="md:text-2xl text-xl font-normal">Current</h1>
                <span className="md:text-5xl text-3xl font-extrabold">429</span>
              </div>
              <div className="flex flex-col gap-12">
                <h1 className="md:text-2xl text-xl font-normal">Total</h1>
                <span className="md:text-5xl text-3xl font-extrabold">
                  5061
                </span>
              </div>
              <div className="flex flex-col gap-12 mr-10">
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
