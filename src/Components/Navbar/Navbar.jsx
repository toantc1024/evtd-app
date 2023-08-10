import React from "react";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-white border-b-[1px] px-6 py-4 flex items-center justify-between">
      <div className="">
        <header className="border-[1px] rounded-full flex gap-2 items-center p-2 font-bold">
          <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />
        </header>
      </div>
    </div>
  );
};

export default Navbar;
