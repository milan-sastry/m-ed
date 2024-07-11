import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as ConnectIcon } from "../assets/connect.svg";

function SearchPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/mentors/")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <SearchBar />
      </div>
      <div className="pt-24 pb-2 bg-slate-50">
        <div className="flex bg-fixed flex-col items-center space-y-2 mt-16 mb-16 px-2">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="w-full h-32 bg-white border border-gray-300 mt-2 rounded-lg flex items-center justify-center hover:bg-slate-100 space-x-14"
            >
              <button className=" w-64 flex flex-row justify-left items-center pt-2 pb-2 space-x-4">
                <div className="flex items-center justify-center border border-gray-500 w-20 h-20 rounded-full">
                  <img src={mentor.picture} alt={mentor.name} />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="font-bold text-2xl">{mentor.name}</h1>
                  <p>{mentor.industry}</p>
                  <p>{mentor.location}</p>
                </div>
              </button>
              <button className="bg-med-red text-white rounded-lg pl-2 pr-3 h-8 flex items-center justify-center space-x-2">
                <ConnectIcon></ConnectIcon>
                <span>Connect</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default SearchPage;
