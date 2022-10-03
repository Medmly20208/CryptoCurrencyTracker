import React from "react";

import Testimonial from "./testimonialItem";

const index = () => {
  const Testimonials = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius mollis malesuada. E",
  ];

  return (
    <div>
      <div className="flex justify-center" id="testimonials">
        <h1 className="text-[40px] font-bold mt-12">What People Are Saying</h1>
      </div>
      <div className="mt-12 flex flex-row flex-wrap justify-center">
        {Testimonials.map((Item, index) => {
          return <Testimonial key={index} content={Item} />;
        })}
      </div>
    </div>
  );
};

export default index;
