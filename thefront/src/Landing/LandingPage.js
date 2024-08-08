import React, { useState } from "react";
import Team from "./Team";
import About from "./About";
//import Contact from "./Contact";
import Land from "./Land";
import { useEffect } from "react";
//import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../components/ui/drawer";


function LandingPage() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgba(188, 57, 46, 0.1)";

    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  const [selected, setSelected] = useState("Home");

  const handleSelect = (tab) => {
    setSelected(tab);
  };

  const Nav = () => {
    return(
    <nav className="flex border-black items-center space-x-10 land-links justify-evenly">
    <button
      onClick={() => handleSelect("Home")}
      aria-label="Home"
      className={`${selected === "Home" ? "text-med-blue" : ""}`}
    >
      Home
    </button>
    <button
      onClick={() => handleSelect("About")}
      aria-label="About"
      className={`${selected === "About" ? "text-med-blue" : ""}`}
    >
      About
    </button>
   {/*  <button
      onClick={() => handleSelect("Contact")}
      aria-label="Contact"
      className={`${selected === "Contact" ? "text-med-blue" : ""}`}
    >
      Contact
    </button> */}
    {/* <motion.button
      href="/login"
      className="font-semibold text-white hover:text-white text-lg whitespace-nowrap p-1 px-4 rounded-2xl bg-med-red
                 shadow-2xl flex items-center h-fit"
      whileHover={{ scale: 1.1 }}

    >
      Login
    </motion.button> */}
  </nav>
    );
  }

  const Navbar = () => {
    return (
      <div className="flex h-24 top-0 w-full pt-8 px-6 sm:px-12 justify-between border-purple-500">
        <div className="flex w-full justify-between">
          <img
            src="redLogoText.png"
            alt="logo"
            className="w-auto h-auto hidden sm:block cursor-pointer drop-shadow-sm"
            onClick={() => handleSelect("Home")}
          />
          <img
            src="redLogo.png"
            alt="logo"
            className="w-auto h-auto sm:hidden"
            onClick={() => handleSelect("Home")}
          />
          <div className="hidden sm:block">
            <Nav/>
          </div>
          <div className="sm:hidden flex items-center">
            <Drawer>
              <DrawerTrigger>
                <FaBars size={25} />
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex w-full p-6 justify-center items-center">
                  <Nav/>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    );
  };

  const tabs = {
    Home: <Land />,
    About: <About />,
    Team: <Team />,
    //Contact: <Contact />,
  };

  const SelectedItem = () => {
    return tabs[selected];
  };

  return (
    <div className="flex flex-col w-screen min-h-screen items-center border-orange-400">
      <Navbar />
      <SelectedItem />
    </div>
  );
}

export default LandingPage;
