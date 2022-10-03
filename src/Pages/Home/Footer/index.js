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
    <div className="flex justify-around gap-4 mb-12 flex-wrap">
      <div>
        <img src={Logo} alt="logo" className="text-[2px]" />
        <p className="text-gray-600">Take your crypto to next level</p>
        <div className="flex gap-4">
          {SocialMediaIcons.map((Item) => {
            return (
              <Icon
                icon={Item}
                className="text-[30px] mt-5 cursor-pointer text-gray-700"
              />
            );
          })}
        </div>
      </div>

      {FooterContent.map((Item) => {
        return <Column title={Item[0]} content={Item.slice(1, Item.length)} />;
      })}
    </div>
  );
};

export default index;
