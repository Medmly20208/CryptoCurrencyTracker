import React from "react";

//Icon
import { Icon } from "@iconify/react";

const index = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[90%] min-h-[200px] border rounded-[30px] mt-12 mb-12 bg-[#2752E7] text-white p-12 relative">
        <h1 className="text-[30px] mb-2 text-center sx:text-left">
          Join a new generation of investors
        </h1>
        <button className="bg-white text-black p-3 rounded-md hover:opacity-90 w-full sx:w-fit">
          Get Started
        </button>

        <div className="top-[-25px] right-[40px] hidden absolute sx:block">
          <Icon icon={"logos:bitcoin"} className="text-[120px]" />
        </div>
        <div className="top-[20px] right-[190px] hidden absolute sx:block">
          <Icon icon={"cib:ethereum"} className="text-[120px] text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default index;
