import React from "react";

const Navbar = () => {
  const NavItemStyle =
    "p-2 relative cursor-pointer text-[#2C3131] after:transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2C3131] hover:after:w-full ";

  return (
    <div className="hidden sx:block">
      <ul className="flex flex-row justify-center items-center gap-8">
        <li className={NavItemStyle}>Products</li>
        <li className={NavItemStyle}>Price</li>
        <li className={NavItemStyle}>Learn</li>
        <li className={NavItemStyle}>Support</li>
      </ul>
    </div>
  );
};

export default Navbar;
