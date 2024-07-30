import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as TextIcon } from "../../assets/text.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Help } from "../../assets/help.svg";
import { ReactComponent as Users } from "../../assets/users.svg";


const Navbar = ({user}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState("null");

  useEffect(() => {
    const pathToIcon = {
      "/home": "home",
      "/search": "search",
      "/text": "text",
      "/settings": "settings",
      "/help": "help",
      "/users": "users",
    };

    const icon = pathToIcon[location.pathname];
    if (icon) {
      setSelectedIcon(icon);
    } else if (location.state && location.state.selectedIcon) {
      setSelectedIcon(location.state.selectedIcon);
    } else {
      setSelectedIcon("null");
    }
  }, [location]);

  const handleIconClick = (iconName) => {
    navigate("/webapp/" + iconName, { state: { selectedIcon: iconName } });
  };

  return (
    <div>
      <div className="sm:flex flex-col min-w-32 max-w-32 h-screen bg-med-red justify-between items-center fixed top-0 left-0 hidden">
        <div className="flex flex-col justify-center items-center w-full p-2 space-y-4">
          <HomeIcon
            className={`nav-bar-btn rounded-3xl bg-gray-200 hover:fill-white active:fill-white ${
              selectedIcon === "home" ? "bg-med-blue rounded-xl fill-white" : ""
            }`}
            onClick={() => handleIconClick("home")}
          />
          <SearchIcon
            className={`nav-bar-btn rounded-3xl bg-gray-200 hover:fill-white active:fill-white ${
              selectedIcon === "search" ? "bg-med-blue fill-white rounded-xl" : ""
            }`}
            onClick={() => handleIconClick("search")}
          />
          <TextIcon
            className={`nav-bar-btn rounded-3xl bg-gray-200 hover:fill-white active:fill-white ${
              selectedIcon === "message"
                ? "bg-med-blue fill-white rounded-xl"
                : ""
            }`}
            onClick={() => handleIconClick("message")}
          />
          <Users
            className={`nav-bar-btn rounded-3xl bg-gray-200 hover:fill-white active:fill-white ${
              selectedIcon === "users" ? "bg-med-blue fill-white rounded-xl" : ""
            }`}
            onClick={() => handleIconClick("users")}
          />
        </div>
        {user.email}

        <div className="flex flex-col w-fit">
         
          
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 h-24 border-gray-300 rounded-full border shadow-md"
          />
          <div className="flex justify-between w-full pt-4 pb-4">
            <Settings className="hover:bg-med-blue bg-slate-200 rounded-full w-10 h-10 p-2" />
            <Help className="hover:bg-med-blue bg-slate-200 rounded-full w-10 h-10 p-2" />
          </div>
        </div>
      </div>

      <div className="fixed flex justify-between items-center px-6 w-screen h-20 bottom-0 sm:hidden bg-white z-50 border-t border-gray-400">
      <HomeIcon
            className={`mobile-nav-btn rounded-3xl ${
              selectedIcon === "home" ? "bg-med-blue rounded-xl fill-white" : ""
            }`}
            onClick={() => handleIconClick("home")}
          />
          <SearchIcon
            className={`mobile-nav-btn rounded-3xl ${
              selectedIcon === "search" ? "bg-med-blue fill-white rounded-xl" : ""
            }`}
            onClick={() => handleIconClick("search")}
          />
          <TextIcon
            className={`mobile-nav-btn rounded-3xl ${
              selectedIcon === "message"
                ? "bg-med-blue fill-white rounded-xl"
                : ""
            }`}
            onClick={() => handleIconClick("message")}
          />
          <Users
            className={`mobile-nav-btn rounded-3xl ${
              selectedIcon === "users" ? "bg-med-blue fill-white rounded-xl" : ""
            }`}
            onClick={() => handleIconClick("users")}
          />


      </div>


    </div>
  );
};

export default Navbar;
