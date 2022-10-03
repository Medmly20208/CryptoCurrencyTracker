import React from "react";

const Modal = (props) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gray-800 opacity-50 z-10"
        onClick={props.onClose}
      ></div>
      <div className="fixed right-0 top-0 h-screen w-[60vw] z-20">
        {props.content}
      </div>
    </>
  );
};

export default Modal;
