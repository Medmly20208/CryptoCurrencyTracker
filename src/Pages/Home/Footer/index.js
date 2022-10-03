import { Icon } from "@iconify/react";
import React from "react";

//logo
import Logo from "../../../assets/Images/logo.png";

//components
import Column from "./Column";

const index = () => {
  const FooterContent = [
    [
      "Company",
      "About Us",
      "Blog",
      "Careers",
      "Student",
      "Security",
      "Trust and Safety",
      "NewsRoom",
      "Videos",
    ],
    [
      "Learn",
      "What's Trending",
      "Product News",
      "Events",
      "University",
      "Research",
      "Market Updates",
    ],
    [
      "Products",
      "Stock & fund",
      "Cash Card",
      "Crypto",
      "Options",
      "Gold",
      "Learn Snacks",
    ],
    ["Support Center", "Contact Us", "System Status", "Areas of Availabilty"],
  ];

  const SocialMediaIcons = [
    "akar-icons:facebook-fill",
    "entypo-social:twitter-with-circle",
    "entypo-social:linkedin-with-circle",
    "ant-design:instagram-filled",
    "akar-icons:youtube-fill",
  ];
  return (
    <footer id="contactus">
      <div className="flex justify-around gap-4 mb-12 flex-wrap border-b border-gray-500 pb-12">
        <div>
          <img src={Logo} alt="logo" className="text-[2px]" />
          <p className="text-gray-600">Take your crypto to next level</p>
          <div className="flex gap-4">
            {SocialMediaIcons.map((Item, index) => {
              return (
                <Icon
                  key={index}
                  icon={Item}
                  className="text-[30px] mt-5 cursor-pointer text-gray-700"
                />
              );
            })}
          </div>
        </div>

        {FooterContent.map((Item, index) => {
          return (
            <Column
              key={index}
              title={Item[0]}
              content={Item.slice(1, Item.length)}
            />
          );
        })}
      </div>
      <div className="text-center text-gray-500 mb-12">
        © Design by Dliya’ Zarror Nibros/ built by Mohamed Moulay
      </div>
    </footer>
  );
};

export default index;
