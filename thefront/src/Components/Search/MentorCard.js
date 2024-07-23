import { FaUserPlus } from "react-icons/fa";
import { ReactComponent as Pin } from "../../assets/pin.svg";
import { ReactComponent as Job } from "../../assets/industry.svg";
import React from "react";
import Badge from "./Badge";

function MentorCard({ mentor }) {
  return (
    <div className="pt-4 z-20">
      <div className="rounded-2xl bg-white border border-gray-200 break-inside-avoid-column relative h-96 px-3 shadow-lg">
        <div className=" flex flex-row h-fit w-full border-b border-gray-200 items-center pb-3 pt-3  space-x-4 min-w-0 justify-between">
          <div className="flex flex-row min-w-0 space-x-2">
            <div className="items-center justify-center border border-gray-500 w-16 h-16 md:w-20 md:h-20 bg-gray-400 flex-none overflow-hidden rounded-full">
              <img
                className="object-cover w-full h-full"
                src={mentor.picture}
                alt={mentor.name}
              />
            </div>
            <div className="flex-col max-h-fit min-w-0 flex">
              <h1 className="font-bold text-md whitespace-nowrap truncate">
                {mentor.name}
              </h1>
              <div className="flex items-center space-x-1 mt-0.5">
                <Job className="min-h-4 min-w-4 w-4 h-4" />
                <p className="truncate text-sm">{mentor.industry}</p>
              </div>
              <div className="flex items-center space-x-1">
                <Pin className="min-h-4 min-w-4 w-4 h-4" />
                <p className="truncate text-sm">{mentor.location}</p>
              </div>
            </div>
          </div>
          <button className="flex bg-med-blue text-white rounded-lg px-4 h-8 items-center justify-center space-x-2">
            <FaUserPlus></FaUserPlus>
            <strong className="hide">Connect</strong>
          </button>
        </div>
        <div className=" border-black absolute -top-3 right-1">
          <Badge text="Perfect Match!"></Badge>
        </div>
      </div>
    </div>
  );
}

export default MentorCard;
