import React from "react";

import PartnerItem from "./PartnerItem";

const Partners = () => {
  const partners = [
    ["binance", "simple-icons:binance"],
    ["bitcoin", "akar-icons:bitcoin-fill"],
    ["coinbase", "tabler:brand-coinbase"],
    ["Tether", "simple-icons:tether"],
    ["etheruem", "cib:ethereum"],
  ];

  return (
    <div className="flex justify-center w-full mb-8 flex-wrap sx:justify-between gap-4 bg-gray-100 border rounded-[30px] p-4">
      {partners.map((Item, index) => {
        return <PartnerItem key={index} name={Item[0]} icon={Item[1]} />;
      })}
    </div>
  );
};

export default Partners;
