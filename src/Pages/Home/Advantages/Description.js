import React from "react";

const Description = () => {
  const Advantages = [
    [
      "Sync Between Platforms",
      "No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.",
    ],
    [
      "More Focus ,Less Clutter",
      "No ads, just the crypto and content you love.",
    ],
    [
      "Security By default",
      "Enable privacy mode and app locking to protect your data.",
    ],
  ];

  return (
    <div>
      <h1 className="font-bold text-[40px] mb-8 mt-12">
        The Most Trusted Cryptocurrency Platform
      </h1>
      <div className="flex flex-col gap-4">
        {Advantages.map((Item, index) => {
          return (
            <div className="flex gap-8 w-[100%] pb-6 pt-6 border-b-2 border-gray-100 sx:w-[60%]">
              <div className="text-[#2752E7] text-[30px] font-bold">
                0{index + 1}
              </div>
              <div>
                <h1 className="text-[20px] font-bold">{Item[0]}</h1>
                <p className="text-gray-600">{Item[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
