import React from "react";

//Assets
import Logo from "../../../assets/Images/logo.png";

//componnets
import Navbar from "./Navbar";
import AuthButtons from "./AuthButtons";
import MobileNavBar from "./MobileNavBar";

const index = () => {
  return (
    <header className="flex flex-row items-center justify-between mt-4 ">
      <img src={Logo} alt="crypto ui logo" className="w-16 h-16" />
      <Navbar />
      <AuthButtons />
      <MobileNavBar />
    </header>
  );
};

export default index;
