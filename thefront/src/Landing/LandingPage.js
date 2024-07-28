import React, { useState } from "react";
import Team from "./Team";
import About from "./About";
import Contact from "./Contact";
import Land from "./Land";

function LandingPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (tab) => {
    setSelected(tab);
  };

  const Navbar = () => {
    return (
      <div className="flex fixed top-0 w-full h-24 backdrop-blur-md p-4 px-6 sm:px-12 border-b border-gray-300 justify-between">
        <div className="flex">
          <img
            src="redLogoText.png"
            alt="logo"
            className="w-auto h-auto hidden sm:block cursor-pointer drop-shadow-sm"
            onClick={() => handleSelect(null)}
          />
          <img
            src="redLogo.png"
            alt="logo"
            className="w-auto h-auto sm:hidden"
          />
        </div>
        <nav className="flex w-72 border-black items-center space-x-6 land-links justify-between">
          <button
            onClick={() => handleSelect("About")}
            aria-label="About"
            className={`${selected === "About" ? "text-med-blue" : ""}`}
          >
            About
          </button>

          {/* <button
          onClick={() => handleSelect("Team")}
          aria-label="Team"
          className={`${selected === "Team" ? "text-med-blue" : ""}`}
        >
          Our Team
        </button> */}
          <button
            onClick={() => handleSelect("Contact")}
            aria-label="Contact"
            className={`${selected === "Contact" ? "text-med-blue" : ""}`}
          >
            Contact
          </button>
          <a
            href="/login"
            className="font-semibold text-white text-lg whitespace-nowrap p-1 px-4 rounded-full bg-med-red
                       shadow-xl hover:brightness-90 transition duration-200 ease-in-out"
          >
            Login
          </a>
        </nav>
      </div>
    );
  };

  const tabs = {
    About: <About />,
    Team: <Team />,
    Contact: <Contact />,
  };

  const SelectedItem = () => {
    return tabs[selected] || <Land />;
  };

  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <Navbar />
      <div className="flex-grow border-black">
        <SelectedItem />
      </div>
    </div>
  );
}

export default LandingPage;
