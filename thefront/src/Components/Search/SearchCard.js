import { FaUserPlus } from "react-icons/fa";
import {ReactComponent as Pin} from "../../assets/pin.svg";
import {ReactComponent as Job} from "../../assets/industry.svg";
import React from "react";
import Badge from "./Badge";


function SearchCard({mentor}){
    return(
            <div
              key={mentor.id}
              className="flex w-full h-fit  items-center justify-center relative"
            >   
                <button className="border-black border text-white flex flex-row h-full w-fit items-center p-4 space-x-4 min-w-0">
                    <div className="items-center justify-center border border-gray-500 w-16 h-16 md:w-20 md:h-20  flex-none overflow-hidden rounded-full">
                    <img className="object-cover w-full h-full" src={mentor.picture} alt={mentor.name} />
                    </div> 
                    <div className="flex-col  border-purple-500 max-h-full min-w-0 text-start">
                    <h1 className="font-bold text-l md:text-2xl">{mentor.name}</h1>
                    <div className="flex items-center space-x-1 mt-0.5">
                        <Job className="min-h-4 min-w-4 fill-white w-4 h-4"/>
                        <p className="truncate">{mentor.industry}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Pin className="min-h-4 min-w-4 fill-white w-4 h-4"/>
                        <p className="truncate">{mentor.location}</p> 
                    </div>
                    </div>
                </button>
                <div className="flex flex-col items-center justify-center border-black h-5/6 relative">
                    <div className=" border-black absolute -top-1.5">
                        <Badge text="Perfect Match!"></Badge>
                    </div>
                    <button className="flex bg-med-red text-white rounded-lg px-4 h-8 items-center justify-center space-x-2">
                        <FaUserPlus></FaUserPlus>
                        <strong className="hide">Connect</strong>
                    </button>
                </div>
            </div>
    );
}

export default SearchCard;