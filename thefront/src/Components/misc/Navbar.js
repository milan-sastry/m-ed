

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as TextIcon } from "../../assets/text.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Help } from "../../assets/help.svg";
import { ReactComponent as Users } from "../../assets/users.svg";

const LargeNavbar = () => {
  return (
    <div className="flex flex-col min-w-32 h-screen bg-neutral-400 justify-between items-center fixed top-0 left-0">
      <div className="flex flex-col justify-center items-center w-full p-2 space-y-4">
        <HomeIcon className="nav-bar-btn" />
        <SearchIcon className="nav-bar-btn" />
        <TextIcon className="nav-bar-btn" />
        <Users className="nav-bar-btn" />
      </div>
      <div className="flex flex-col w-fit">
        <img src="https://www.hollywoodreporter.com/wp-content/uploads/2017/11/got-110-h_2017.jpg?w=1296&h=730&crop=1" alt="profile" className="w-24 h-24 border-gray-300 rounded-full border shadow-md" />
        <div className="flex justify-between w-full pt-4 pb-4">
          <Settings className="hover:bg-med-red bg-slate-200 rounded-full w-10 h-10 p-2 hover:fill-white" />
          <Help className="hover:bg-med-red bg-slate-200 rounded-full w-10 h-10 p-2 hover:fill-white" />
        </div>
      </div>
    </div>
  );
};

export default LargeNavbar;
