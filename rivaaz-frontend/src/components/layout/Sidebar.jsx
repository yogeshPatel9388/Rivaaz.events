import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Wallet,
  Lightbulb,
  User,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Calendar", path: "/calendar", icon: <Calendar size={20} /> },
    { name: "Catalog", path: "/catalog", icon: <BookOpen size={20} /> },
    { name: "Cost Guide", path: "/cost-guide", icon: <Wallet size={20} /> },
    { name: "Ideas", path: "/ideas", icon: <Lightbulb size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen pt-20 bg-white border-r border-slate-200 w-64 hidden lg:block">
      {/* Removed overflow-y-auto from here and added it only to the nav area 
        to ensure the bottom task window stays pinned to the bottom.
      */}
      <div className="h-full px-4 py-6 flex flex-col justify-between">
        {/* Navigation Links Area */}
        <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-350px)] no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center p-3.5 rounded-2xl group transition-all duration-200 font-bold text-sm font-modern
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }
              `}
            >
              <span className="transition-colors">{item.icon}</span>
              <span className="ml-3 tracking-tight">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Wedding Tasks Window - Pushed to the bottom by justify-between */}
        <div className="mb-6 pt-4">
          <div className="p-5 bg-gradient-to-br from-rivaaz-pink to-rivaaz-red rounded-[2rem] text-white shadow-romantic">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] opacity-80 uppercase font-black tracking-widest font-modern">
                Wedding Tasks
              </p>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold">
                60%
              </span>
            </div>
            <h3 className="text-xl font-black mb-3 italic font-tradition leading-tight">
              14 Tasks Left
            </h3>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-1000"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-[10px] mt-3 opacity-70 font-medium italic font-modern">
              Prioritize them for today.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
