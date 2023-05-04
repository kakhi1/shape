import React from "react";

const ThirdShape = () => {
  return (
    <>
      <div className="DashboardHeroComponentMainParent relative left-2 md:left-0 flex justify-center md:mt-8  ">
        <div className="xl:w-[1266px] lg:w-[1100px] md:w-[900px] sm:w-[640px] sm:h-[280px] h-[400px] backgoundpathmobile2 border-[1px] sm:border-0 border-[#43E5F1] m-5 sm:m-0 ">
          <div className="xl:w-[1266px] lg:w-[1100px] md:w-[900px] sm:w-[640px] sm:h-[280px] h-[400px] backgoundpathfirst bg-cover bg-center flex sm:bg-[url('./frame.svg')] bg-[url('./bgformobile.png')] backgoundpathmobile  justify-start items-start ">
            <div className="heroDashboardContainer pb-10 relative top-12 md:ml-8 bg-black bg-opacity-40 heroGlassBox rounded">
              <div className="flex flex-col gap-4 md:ml-5 ml-2 pt-2 pb-6 rounded-md ">
                <p className="text-gray-400 -mb-7">PLay and earn</p>
                <p className="blackBoxFont text-white text-7xl sm:text-3xl">
                  Mega prize
                </p>
                <p className="text-gray-400 -mt-5 montestratFont">
                  Join the ultimate gaming event, compete for the Mega Prize!
                  Score points <br />
                  based on your in-game performance, climb the leaderboard, and
                  win.
                </p>

                <div className="flex gap-9 items-center ">
                  <button className="text-white w-28 h-8 montestratFont text-sm md:text-base dashBoardHeroBtn">
                    REGISTER
                  </button>

                  <div className="flex flex-col text-white items-start w-16 ml-1 md:w-auto md:ml-0">
                    <p className=" text-gray-400 text-xs">Already Registered</p>
                    <p className="montestratFont">23k</p>
                  </div>

                  <div className="flex gap-0 flex-col items-start">
                    <p className=" text-gray-400 text-xs">Remaining Time</p>
                    <div className="interFont items-center flex">
                      <div className="text-white">
                        <span className="mr-0">15</span>{" "}
                        <span className="text-gray-400 text-xs mr-3 pl-0 timeD uppercase">
                          D
                        </span>{" "}
                      </div>
                      <div className="text-white">
                        <span className="mr-0">12</span>{" "}
                        <span className="text-gray-400 text-xs mr-3 pl-0 timeD uppercase">
                          H
                        </span>{" "}
                      </div>
                      <div className="text-white">
                        <span className="mr-0">25</span>{" "}
                        <span className="text-gray-400 text-xs pl-0 timeD uppercase">
                          M
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};

export default ThirdShape;
