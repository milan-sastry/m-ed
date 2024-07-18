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
    <div className="flex h-screen max-w-screen">
      <Navbar />
      <div className=" flex flex-col max-h-full h-full ml-32 w-full min-w-0
      ">
          <SearchBar />
        <div className="flex flex-col items-center min-w-0 z-10 pr-10 overflow-y-scroll divide-neutral-400 divide-y pt-[104px]
        bg-gradient-to-br from-med-red
        bg-local
        "
        >
            {mentors.map((mentor) => (
              <SearchCard mentor={mentor} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default SearchPage;
