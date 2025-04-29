import React from "react";
import { watchModels } from "../data";

const Watch = () => {
  return (
    <div className="flex flex-col items-center justify-around bg-white h-full py-8 px-4">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Which Apple Watch is right for you?
      </h1>
      <div className="w-full flex justify-around">
        <div className="w-60 h-[430px] flex flex-col justify-around">
          <div className="w-full h-64 mb-4 overflow-hidden relative">
            <img
              src="images/watch10-side.png"
              alt="watch"
              className="absolute w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
