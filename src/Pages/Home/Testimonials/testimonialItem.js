import React from "react";

//iconify
import { Icon } from "@iconify/react";

//assets
import Avatar from "../../../assets/Images/avatar.jpg";

const testimonialItem = (props) => {
  return (
    <div className="m-4 w-[350px] border border-gray-400 rounded-3xl p-4">
      <div className="flex gap-4 mb-4">
        <img
          src={Avatar}
          alt="ceo of adobe"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col gap-1 ">
          <h3 className="text-[17px] font-bold">John Doe</h3>
          <h4 className="text-[14px] text-gray-400">CEO of Adobe </h4>
        </div>
      </div>
      <div>"{props.content.repeat(2)}"</div>
    </div>
  );
};

export default testimonialItem;
