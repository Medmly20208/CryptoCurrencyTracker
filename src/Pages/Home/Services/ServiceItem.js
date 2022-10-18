import React from "react";

const ServiceItem = (props) => {
  const rowDirection =
    props.index % 2 === 0 ? " flex-row-reverse	" : " flex-row "; //make a section service in postion and the next service section in the opposite position

  const ElementStyle =
    "flex " +
    rowDirection +
    "justify-between items-center mt-20 gap-2 sf:flex-col";

  return (
    <div className={ElementStyle}>
      <div className="w-[100%] sx:w-[40%]">
        <h1 className="text-[40px] font-bold">{props.title}</h1>
        <p className="text-[20px] text-gray-700 mt-4">{props.description}</p>
      </div>
      <div className="w-[100%] sx:w-[40%]">
        <img src={props.logo} alt="logo" />
      </div>
    </div>
  );
};

export default ServiceItem;
