import SearchBar from "../oldComponents/Search/SearchBar";

import React, { useEffect, useState } from "react";
import axios from "axios";

import FilterPage from "../oldComponents/Search/FilterPage";
import MentorCard from "../oldComponents/Search/MentorCard";

function SearchPage() {
  const [mentors, setMentors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/mentors/")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

  const handleFilters = () => {
    setShowFilters(!showFilters);

  }

  return (

    

      <div
        className="flex flex-col sm:ml-32 mb-20 sm:mb-0 w-full overflow-y-scroll bg-white"
      >
        
        <SearchBar callback={handleFilters}/>
        <div className=" flex flex-col max-h-full h-full w-full min-w-0 z-20 relative">
          <div className={`max-w-full min-w-0 px-6 pt-4 pb-4 columns-sm z-10 relative bg-slate-50 ${showFilters ? 'blur-md':''}`}>
            {mentors.map((mentor) => (
              <MentorCard mentor={mentor} />
            ))}
          </div>
          <FilterPage show={showFilters} close={handleFilters}/>
        </div>
      </div>

  );
}

export default SearchPage;
