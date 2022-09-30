import React from "react";

const Modal = (props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-800 opacity-50"
        onClick={props.onClose}
      ></div>
      <div className="absolute right-0 top-0 h-screen w-[60vw]">
        {props.content}
      </div>
    </>
  );
};

export default Modal;
