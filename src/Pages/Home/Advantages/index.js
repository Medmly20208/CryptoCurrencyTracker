import React from "react";

//assets
import AdvantageImage from "../../../assets/Images/assetone.png";

//components
import Description from "./Description";

const index = () => {
  return (
    <section className="flex flex-col-reverse sx:flex-row">
      <div className="w-[100%] sx:w-[50%]">
        <Description />
      </div>
      <div className="w-[100%] sx:w-[50%]">
        <img src={AdvantageImage} alt="Iphones" className="w-full" />
      </div>
    </section>
  );
};

export default index;
