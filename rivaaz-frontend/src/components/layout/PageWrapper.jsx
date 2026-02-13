import React from "react";
import Sidebar from "./Sidebar";
import { Search, Bell, MessageSquare, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const PageWrapper = ({ children }) => {
  const { user } = useAuth();

  // Helper to get initials (e.g., "Michael & Juliet" -> "MJ")
  const getInitials = (name) => {
    if (!name) return "G";
    return name
      .split(" ")
      .filter((n) => n !== "&")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-rivaaz-bg font-modern selection:bg-rivaaz-rose selection:text-rivaaz-red">
      {/* 1. Fixed Sidebar - Hidden on small screens */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-100 bg-white flex-shrink-0">
        <Sidebar />
      </aside>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* 3. Horizontal Navbar - Enhanced with Glassmorphism */}
        <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-4 md:px-8 flex-shrink-0 z-50 sticky top-0">
          {/* Mobile Menu Toggle (Optional: For future mobile sidebar) */}
          <button className="lg:hidden p-2 mr-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
            <Menu size={20} />
          </button>

          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rivaaz-red transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search your wedding plan..."
                className="w-full bg-slate-100/50 border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-4 focus:ring-rivaaz-red/5 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-1">
              <button className="p-2.5 text-slate-400 hover:text-rivaaz-red hover:bg-rivaaz-rose/30 rounded-2xl transition-all">
                <MessageSquare size={20} />
              </button>
              <button className="p-2.5 text-slate-400 hover:text-rivaaz-red hover:bg-rivaaz-rose/30 rounded-2xl transition-all relative">
                <Bell size={20} />
                {user && (
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rivaaz-red rounded-full border-2 border-white"></span>
                )}
              </button>
            </div>

            <div className="h-8 w-[1px] bg-slate-100 mx-1 md:mx-2" />

            {/* User Profile Section */}
            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <p className="text-[13px] font-black text-rivaaz-dark leading-none">
                  {user?.names || "Guest Explorer"}
                </p>
                <p className="text-[10px] text-rivaaz-red font-bold uppercase mt-1 tracking-wider opacity-80">
                  {user ? "Premium Member" : "Join Rivaaz"}
                </p>
              </div>

              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rivaaz-red to-rivaaz-pink shadow-romantic flex items-center justify-center text-white text-xs font-black transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                  {getInitials(user?.names)}
                </div>
                {/* Visual indicator for online/active */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {/* 4. Scrollable Page Body */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-rivaaz-bg scroll-smooth">
          <div className="p-4 md:p-8 lg:p-12 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700">
            {children}
          </div>
        </main>

        {/* Subtle Decorative Gradient (Optional: Adds depth to the empty space) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rivaaz-pink/5 blur-[120px] -z-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rivaaz-rose/10 blur-[150px] -z-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default PageWrapper;
