import React from "react";

import { Icon } from "@iconify/react";

const PartnerItem = (props) => {
  return (
    <div className="flex flex-row items-center gap-2 ">
      <Icon icon={props.icon} className="text-[20px] text-[#626262]" />
      <h2 className="text-[#626262] text-[20px]">{props.name}</h2>
    </div>
  );
};

export default PartnerItem;
