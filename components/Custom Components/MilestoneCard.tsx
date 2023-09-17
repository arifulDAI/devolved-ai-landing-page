import React from "react";

type PropTypes = {
  date: string;
  milestone: string;
};

const MilestoneCard = ({ date, milestone }: PropTypes) => {
  return (
    <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110">
      <div className=" w-1/2 border border-[#0074D9] rounded-lg px-5 py-3 mt-10 mx-5 text-center">
        <p className="text-[#0074D9]">{date}</p>
      </div>
      <div className="border-l border-[#0074D9] h-10"></div>
      <div className="rounded-2xl p-5 shadow-lg">
        <p>{milestone}</p>
      </div>
    </div>
  );
};

export default MilestoneCard;
