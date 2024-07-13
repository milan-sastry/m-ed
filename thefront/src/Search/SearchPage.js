import SearchBar from "../Components/Search/SearchBar";
import Navbar from "../Components/misc/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchCard from "../Components/Search/SearchCard";

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
    <div className="flex flex-col border border-black bg-slate-50">
      <SearchBar />
        <div className="border-green-500 flex flex-col items-center space-y-2 mb-16 px-2 pb-2">
          {mentors.map((mentor) => (
            <SearchCard mentor={mentor}/>
          ))}
        </div>
      <Navbar />
    </div>
  );
}

export default SearchPage;
