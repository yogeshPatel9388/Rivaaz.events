import React from "react";
import Sidebar from "./Sidebar";
import {
  MessageSquare,
  Bell,
  Search,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .filter((n) => n !== "&")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="h-screen bg-rivaaz-bg flex flex-col overflow-hidden">
      {/* 1. Navbar */}
      <nav className="fixed top-0 z-[100] w-full h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/">
            <h1 className="text-2xl font-black bg-gradient-to-r from-rivaaz-red to-rivaaz-pink bg-clip-text text-transparent font-tradition">
              Rivaaz
            </h1>
          </Link>
          <div className="hidden md:flex relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search collections..."
              className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-rivaaz-red/10 font-modern"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Only show notifications/messages if logged in */}
          {user && (
            <>
              <button className="p-2.5 text-slate-500 hover:bg-rivaaz-rose rounded-2xl transition-colors relative">
                <MessageSquare size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rivaaz-red rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2.5 text-slate-500 hover:bg-rivaaz-rose rounded-2xl transition-colors">
                <Bell size={20} />
              </button>
            </>
          )}

          <div className="flex items-center gap-3 ml-2 border-l pl-4 border-slate-200">
            {user ? (
              <>
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-black text-rivaaz-dark leading-none font-modern">
                    {user.names}
                  </p>
                  <p className="text-[10px] text-rivaaz-red font-black mt-1 uppercase tracking-tighter font-modern">
                    {user.planType || "Premium Plan"}
                  </p>
                </div>
                <div className="group relative cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-rivaaz-red flex items-center justify-center text-white font-black text-xs shadow-romantic transition-transform group-hover:scale-105">
                    {getInitials(user.names)}
                  </div>
                  <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-slate-100 shadow-romantic rounded-2xl p-2 w-40">
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-2 p-2 text-slate-600 hover:bg-rivaaz-rose hover:text-rivaaz-red rounded-xl text-xs font-bold transition-colors"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-rivaaz-red text-white px-5 py-2.5 rounded-xl text-xs font-black font-modern uppercase tracking-wider hover:bg-rivaaz-pink transition-all active:scale-95 shadow-lg shadow-rose-100"
              >
                <UserIcon size={14} />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-20 overflow-hidden">
        {/* 2. Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-slate-100 bg-white h-full overflow-hidden">
          <Sidebar />
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1 h-full overflow-y-auto custom-scrollbar transition-all bg-rivaaz-bg">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
