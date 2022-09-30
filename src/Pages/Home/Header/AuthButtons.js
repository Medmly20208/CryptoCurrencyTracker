import React from "react";

const AuthButtons = () => {
  return (
    <div className="flex-row gap-6 hidden sx:flex">
      <button>Sign In</button>
      <button className="text-[#2752E7] border border-[#2752E7] pt-2 pb-2 pl-6 pr-6  rounded-md hover:bg-[#2752E7] hover:text-white transition-all">
        Get Started
      </button>
    </div>
  );
};

export default AuthButtons;
