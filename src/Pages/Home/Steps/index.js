import React from "react";

//assets
import signUp from "../../../assets/Images/signUp.png";
import fund from "../../../assets/Images/fund.png";
import BuyCrpto from "../../../assets/Images/BuyCrypto.png";

//components
import StepItem from "./StepItem";

const index = () => {
  const steps = [
    [
      "Sign Up",
      "Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends",
      signUp,
    ],
    [
      "Fund",
      "Choose you preferred payment method such as bank transfer or credit card to top up your wallet ",
      fund,
    ],
    [
      "Buy Crpto",
      "Sign up for free wallet on web, IOS or Android and follow our easy process to set up your profile",
      BuyCrpto,
    ],
  ];

  return (
    <div className="mt-12 mb-12 ">
      <div className="flex  flex-col  items-center">
        <h1 className="text-[35px] font-bold ">
          Get Started in just Few minutes
        </h1>
        <p className="text-[20px] text-gray-600 ">
          Has a variety of features that make it the best place to start trading
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-8 sx:justify-between ">
        {steps.map((step) => {
          return (
            <StepItem title={step[0]} description={step[1]} logo={step[2]} />
          );
        })}
      </div>
    </div>
  );
};

export default index;
