import React from "react";

const StepItem = (props) => {
  return (
    <div className="shadow-2xl  p-4 flex flex-col justify-center border gap-4 border-gray-400 rounded-3xl max-w-[350px] h-[360px] bg-white w-100vw">
      <div className="flex justify-center">
        <img src={props.logo} alt="logo" />
      </div>
      <h1 className="text-[35px] font-bold text-center">{props.title}</h1>
      <p className="text-[20px] text-gray-600 text-center">
        {props.description}
      </p>
    </div>
  );
};

export default StepItem;
