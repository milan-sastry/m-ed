import React from "react";
import HowToNetwork from "./HowToNetwork";
import PlayDirty from "./PlayDirty";


const Home = () => {
  return (
    <div className="sm:ml-32 flex flex-col items-center w-full h-screen py-4 space-y-4 px-8">
      <PlayDirty />
      <div className="flex w-full">
          <HowToNetwork />
      </div>
      
    </div>
  );
};

export default Home;
