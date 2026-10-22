import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
export const Navbar = ({ city, setCity, handleSearch }) => {
  return (
    <>
      <div
        className="w-full left-px rounded-1xl flex items-center justify-between
       "
      >
        <div className="flex items-center space-x-4  rounded-2xl px-4 py-2 w-[500px] border border-gray-300 p-1.5">
          {/* <span className="text-white">
            <LuSearch size={18} />
          </span> */}
          <button
            onClick={handleSearch}
            className="text-white hover:text-cyan-400 transition cursor-pointer"
          >
            <LuSearch size={18} />
          </button>
          <input
            type="text"
            className="outline-none bg-transparent text-white border-none"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <IoNotificationsOutline
            size={24}
            className="text-white cursor-pointer hover:text-cyan-400"
          />

          <img
            src="https://img.icons8.com/ios-filled/50/000000/user--v1.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover text-white ml-4 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
