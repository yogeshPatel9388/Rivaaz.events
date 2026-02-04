import React from "react";
import Sidebar from "./Sidebar";
import { MessageSquare, Bell, Search } from "lucide-react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-rivaaz-bg">
      {" "}
      {/* Using the custom background from config */}
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-tradition">
            Rivaaz
          </h1>
          <div className="hidden md:flex relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-rivaaz-primary/20 font-modern"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2.5 text-slate-500 hover:bg-rivaaz-rose rounded-2xl transition-colors relative">
            <MessageSquare size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rivaaz-red rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2.5 text-slate-500 hover:bg-rivaaz-rose rounded-2xl transition-colors">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-3 ml-2 border-l pl-4 border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-rivaaz-dark leading-none font-modern">
                Michael & Juliet
              </p>
              <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter font-modern">
                Premium Plan
              </p>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=Michael+Juliet&background=E11D48&color=fff"
              className="w-10 h-10 rounded-2xl shadow-sm border border-slate-100"
              alt="Profile"
            />
          </div>
        </div>
      </nav>
      {/* Sidebar Component */}
      <Sidebar />
      {/* Main Content Area */}
      {/* Increased the padding-top slightly and used the 'rivaaz-bg' class 
          to ensure the profile banner has a clean transition.
      */}
      <main
        className="lg:ml-64 min-h-screen p-6 lg:p-10 transition-all"
        style={{ paddingTop: "110px" }}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
