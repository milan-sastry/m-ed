import { FaUserPlus } from "react-icons/fa";
import React from "react";
import Badge from "./Badge";


function SearchCard({mentor}){
    return(
            <div
              key={mentor.id}
              className="flex w-full h-fit bg-white mt-2 border border-gray-300 rounded-lg  items-center justify-start relative pl-4 pr-4 hover:bg-slate-100"
            >   
                <button className=" border border-black flex flex-row h-full w-full items-center pt-2 pb-2 pr-4 space-x-4 min-w-0">
                    <div className="items-center justify-center border border-gray-500 w-20 h-20  flex-none overflow-hidden rounded-full">
                    <img className="object-cover w-full h-full" src={mentor.picture} alt={mentor.name} />
                    </div> 
                    <div className="flex-col border border-purple-500 max-h-full min-w-0 text-start">
                    <h1 className="font-bold text-l md:text-2xl">{mentor.name}</h1>
                    <p className="truncate">{mentor.industry}</p>
                    <p className="truncate">{mentor.location}</p> 
                    </div>
                </button>
                <div className="flex flex-col items-center justify-center border border-black h-5/6 relative">
                    <div className="border border-black absolute top-0">
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