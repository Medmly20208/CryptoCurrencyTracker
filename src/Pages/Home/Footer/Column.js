import React from "react";

const Column = (props) => {
  return (
    <div>
      <h1 className="text-black text-[20px] font-bold">{props.title}</h1>
      <div>
        <ul>
          {props.content.map((Title) => {
            return (
              <li className="text-gray-600 mt-2 cursor-pointer hover:underline">
                {Title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Column;
