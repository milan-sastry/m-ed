import React, { useState } from "react";
import Team from "./Team";
import About from "./About";
import Contact from "./Contact";
import Land from "./Land";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'rgba(188, 57, 46, 0.2)';
    
    return () => {
        document.body.style.backgroundColor = originalBackgroundColor;
    };
}, []);

  const [selected, setSelected] = useState(null);

  const handleSelect = (tab) => {
    setSelected(tab);
  };

  const Navbar = () => {
    return (
      <div className="flex top-4 h-24 mt-6 sm:mx-8 mx-4 bg-white p-4 px-6 sm:px-8 border-b border-gray-300 justify-between drop-shadow-xl rounded-xl">
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
          <nav className="sm:ml-16 ml-10 flex border-black items-center space-x-10 land-links justify-between">
            <button
              onClick={() => handleSelect("About")}
              aria-label="About"
              className={`${selected === "About" ? "text-med-blue" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => handleSelect("Contact")}
              aria-label="Contact"
              className={`${selected === "Contact" ? "text-med-blue" : ""}`}
            >
              Contact
            </button>
          </nav>
        </div>
        
        <div className="flex items-center">
          <a
            href="/login"
            className="font-semibold text-white text-lg whitespace-nowrap p-1 px-4 rounded-2xl bg-med-red
                         shadow-2xl hover:brightness-90 transition duration-200 ease-in-out flex items-center h-fit"
          >
            Login
          </a>
        </div>
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
    <div className="flex flex-col w-screen h-full min-h-screen">
      <Navbar />
      <div className="flex-grow border-black max-w-full">
        <SelectedItem />
      </div>
    </div>
  );
}

export default LandingPage;
