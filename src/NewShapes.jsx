import React from "react";

const NewShapes = () => {
  return (
    <div className="w-full h-[2100px] bg-yellow-300 p-10 px-10 ">
      {/* first shape  */}
      <div className="w-[40wm] h-[100vh] border-[#43E5F1] border-[1px] bg-[#43E5F1] opacity-80 FirstShapecss2">
        <div className="w-[40wm] h-[100vh] bg-[#2d3e49] opacity-80 FirstShapecss "></div>
      </div>
      {/* second shape */}
      <div className="w-[40vm] h-[45vh] border-[#43E5F1] border-[1px] bg-[#43E5F1] opacity-80 SecondShapecss2 my-5 ">
        <div className="w-[40vm] h-[45vh] border-[#43E5F1]  bg-[#2d3e49] opacity-80 SecondShapecss"></div>
      </div>
      {/* third shape  */}
      <div className="max-w-[47rem] h-[21rem] border-[#43E5F1] border-[1px] bg-[#43E5F1] opacity-80 ThirdShapecss2 my-10 ">
        <div className="max-w-[47rem] h-[21rem] border-[#43E5F1]  bg-[#2d3e49] opacity-80 ThirdShapecss"></div>
      </div>
      {/* fourt shape  */}
      <div className="max-w-[23rem] h-[38rem] border-[#43E5F1] border-[1px] bg-[#43E5F1] opacity-80 FourthShapecss2 my-10 ">
        <div className="max-w-[23rem] h-[38rem] border-[#43E5F1]  bg-[#2d3e49] opacity-80 FourthShapecss"></div>
      </div>
    </div>
  );
};

export default NewShapes;
