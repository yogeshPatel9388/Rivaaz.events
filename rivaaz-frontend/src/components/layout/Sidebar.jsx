import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  CheckCircle2,
  Calendar,
  BookOpen,
  Wallet,
  Lightbulb,
  User,
  LogOut,
  LogIn,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    {
      name: "Vendor Team",
      path: "/vendor-team",
      icon: <CheckCircle2 size={20} />,
    },
    { name: "Calendar", path: "/calendar", icon: <Calendar size={20} /> },
    { name: "Catalog", path: "/catalog", icon: <BookOpen size={20} /> },
    { name: "Cost Guide", path: "/cost-guide", icon: <Wallet size={20} /> },
    { name: "Ideas", path: "/ideas", icon: <Lightbulb size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-4 bg-white overflow-hidden group">
      {/* Navigation Links Area */}
      <div className="flex-1 flex flex-col gap-8 overflow-y-auto no-scrollbar">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center p-3 rounded-2xl group transition-all duration-200 font-bold text-sm font-modern
                ${
                  isActive
                    ? "bg-rivaaz-rose/50 text-rivaaz-red shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }
              `}
            >
              <span className="transition-colors">{item.icon}</span>
              <span className="ml-3 tracking-tight">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Wedding Tasks Window - Only shown for Logged In Users */}
        {user ? (
          <div className="mt-4 flex-shrink-0 animate-in slide-in-from-bottom-4 duration-500">
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
        ) : (
          /* Guest CTA - Encourages signup */
          <div className="mt-4 p-5 bg-slate-50 border border-dashed border-slate-200 rounded-[2rem]">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2 font-modern text-center">
              Unlock More
            </p>
            <p className="text-xs text-slate-600 font-modern text-center leading-relaxed">
              Sign in to track your personal tasks & budget.
            </p>
          </div>
        )}
      </div>

      {/* Auth Toggle Area */}
      <div className="mt-auto pt-4 border-t border-slate-100">
        {user ? (
          <button
            onClick={logout}
            className="w-full flex items-center p-3 rounded-2xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all font-bold text-sm font-modern"
          >
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="w-full flex items-center p-3 rounded-2xl text-rivaaz-red bg-rivaaz-rose/30 hover:bg-rivaaz-rose/50 transition-all font-black text-sm font-modern"
          >
            <LogIn size={20} />
            <span className="ml-3 uppercase tracking-tighter">
              Sign In / Join
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
