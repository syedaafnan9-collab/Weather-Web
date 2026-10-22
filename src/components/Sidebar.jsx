import React from "react";
import {
  LuHourglass,
  LuLayoutDashboard,
  LuChartColumn,
  LuMapPin,
  LuSettings,
  LuMoon,
} from "react-icons/lu";

const Sidebar = () => {
  return (
    <>
      <div className="w-20 h-[950px]  bg-black/10 backdrop-xl border border-white/40 rounded-2xl flex flex-col items-center py-6">
        <div className="text-white text-3xl">
          <LuHourglass />
        </div>

        <div className="flex flex-col gap-8 mt-16 text-white text-xl">
          <LuLayoutDashboard className="cursor-pointer hover:text-cyan-400" />

          <LuChartColumn className="cursor-pointer hover:text-cyan-400" />

          <LuMapPin className="cursor-pointer hover:text-cyan-400" />

          <LuSettings className="cursor-pointer hover:text-cyan-400" />
        </div>

        <div className="mt-auto text-white text-xl">
          <LuMoon />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
