import React from "react";

//Images
import dashboard from "../../../assets/Images/dashboard.png";

//components
import Partners from "./Partners";

const index = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-12 gap-8">
      <div>
        <h1 className="text-[60px] text-[#2752E7] font-bold text-center">
          One platform
        </h1>
        <h1 className="text-[60px] font-bold text-center">All things Crypto</h1>
      </div>
      <div>
        <p className="max-w-[500px] text-center text-gray-600">
          Open a free account in minutes right from your phone and make your
          money go further
        </p>
      </div>
      <div className="flex flex-col gap-2 sx:flex-row">
        <input
          type="text"
          placeholder="Email Adress..."
          className="border border-gray-500 p-4 rounded-md mr-4  w-full sx:w-fit"
        />
        <button className="bg-[#2752E7] text-white p-4 rounded-md hover:opacity-90 w-full sx:w-fit">
          Get Started
        </button>
      </div>
      <div className="mb-12">
        <img src={dashboard} alt="dashboard" className="hidden sx:block" />
      </div>
      <Partners />
    </section>
  );
};

export default index;
