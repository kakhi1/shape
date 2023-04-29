import React from "react";

const SecondShape = () => {
  return (
    <div className="w-full md:h-[850px] flex justify-center items-center  bg-[#2d3e49] ">
      <div className="max-w-[800px] max-h-[800px] relative  bg-[#2d3e49] m-6 ">
        <div className="z-30 text-white -top-4 left-[35%] absolute">
          <h1 className="lg:text-2xl sm:text-xl text-xs font-semibold uppercase">
            discconect
          </h1>
        </div>
        <div className=" h-[100%] w-[100%] bg-[#43E5F1] border-[#43E5F1]  sm:border-2 border-[1px]  second-shape ">
          <div className="h-[100%] w-[100%] bg-[#2d3e49] opacity-[99] second-shape2 flex justify-center items-center text-white ">
            <div className="flex flex-col md:gap-6 gap-3 items-center md:mt-20 mt-10">
              <h1 className="md:text-6xl text-3xl  w-full uppercase">
                disconect{" "}
              </h1>
              <h1 className="md:text-6xl text-3xl w-full uppercase">discord</h1>
              <h1 className="md:text-6xl text-3xl  w-full uppercase">
                account{" "}
              </h1>
              <span className="md:text-xl text-xs w-[80%]">
                Thinking Of Disconnecting Your Discord Account ? Confirm To Log
                Out.{" "}
              </span>
              <div className="md:m-10 m-5 flex justify-around md:gap-14 gap-7">
                <div className="md:w-32 w-16 md:h-12 h-6 border-2 bg-red-500  border-red-500 button-shape">
                  <div className="w-[100%] h-[100%] button-shape bg-[#2d3e49] flex justify-center items-center ">
                    <button className="md:text-xl text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="md:w-32 w-16  md:h-12 h-6 border-2 bg-blue-500  border-blue-500 button-shape">
                  <div className="w-[100%] h-[100%] button-shape bg-[#2d3e49] flex justify-center items-center ">
                    <button className="md:text-xl text-sm  font-medium">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondShape;
