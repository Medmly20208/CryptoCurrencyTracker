import React from "react";

const ModalContent = () => {
  const listStyle = "p-4  w-full  text-center  ";

  return (
    <div className="bg-white  h-full w-full ">
      <ul>
        <li className={listStyle}>
          <div className="hover:bg-gray-200 cursor-pointer p-2  rounded-md">
            <a href="#services"> Services</a>
          </div>
        </li>
        <li className={listStyle}>
          <div className="hover:bg-gray-200 cursor-pointer p-2  rounded-md">
            <a href="#steps">Steps</a>
          </div>
        </li>
        <li className={listStyle}>
          <div className="hover:bg-gray-200 cursor-pointer p-2  rounded-md">
            <a href="#testimonials">Testimonials</a>
          </div>
        </li>
        <li className={listStyle}>
          <div className="hover:bg-gray-200 cursor-pointer p-2  rounded-md">
            <a href="#contactus">Contact Us</a>
          </div>
        </li>

        <li className="cursor-pointer text-gray-600 border border-gray-600 rounded-md m-4 pt-2 pb-2 pl-6 pr-6 text-center hover:bg-gray-600 hover:text-white transition-all">
          Sign In
        </li>
        <li className="m-4 cursor-pointer text-center text-[#2752E7] border border-[#2752E7] pt-2 pb-2 pl-6 pr-6  rounded-md hover:bg-[#2752E7] hover:text-white transition-all">
          Get Started
        </li>
      </ul>
    </div>
  );
};

export default ModalContent;
