import React from "react";

//assets
import AssetOne from "../../../assets/Images/assetTwo.png";
import AssetTwo from "../../../assets/Images/assetThree.png";
import AssetThree from "../../../assets/Images/assetFour.png";

//components
import ServiceItem from "./ServiceItem";

const index = () => {
  const services = [
    [
      "Create Portfolio Today",
      "Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading",
      AssetOne,
    ],
    [
      "Lightning-Fast Crypto Trading",
      "The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
      AssetTwo,
    ],
    [
      "Security From Day One",
      "Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.",
      AssetThree,
    ],
  ];

  return (
    <div id="services">
      {services.map((Service, index) => {
        return (
          <ServiceItem
            key={index}
            title={Service[0]}
            description={Service[1]}
            logo={Service[2]}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default index;
