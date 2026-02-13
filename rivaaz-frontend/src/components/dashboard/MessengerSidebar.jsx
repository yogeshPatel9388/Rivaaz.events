import React from "react";
import { MoreHorizontal, Edit, Search, MessageSquarePlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const contacts = [
  {
    id: 1,
    name: "Cynthia Williams",
    message: "Those boutiques, stunning, right? 😍",
    time: "Just now",
    online: true,
    avatar:
      "https://ui-avatars.com/api/?name=Cynthia+Williams&background=fce7f3&color=db2777",
  },
  {
    id: 2,
    name: "Mark Rober",
    message: "You sure? 😄 Twenty 30-second applic...",
    time: "3h ago",
    online: false,
    avatar:
      "https://ui-avatars.com/api/?name=Mark+Rober&background=f1f5f9&color=475569",
  },
  {
    id: 3,
    name: "Amina Hansen",
    message: "I recently went through a tough br...",
    time: "5h ago",
    online: true,
    avatar:
      "https://ui-avatars.com/api/?name=Amina+Hansen&background=e0f2fe&color=0284c7",
  },
];

const MessengerSidebar = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 shadow-sm h-full flex flex-col min-h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl font-black text-rivaaz-dark font-tradition">
            Messenger
          </h3>
          {user && (
            <span className="w-2 h-2 bg-rivaaz-red rounded-full animate-pulse"></span>
          )}
        </div>
        <div className="flex gap-1">
          <button className="p-2 hover:bg-rivaaz-rose rounded-xl text-slate-400 hover:text-rivaaz-red transition-colors">
            <Edit size={18} />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {!user ? (
        /* GUEST STATE: Fills the empty space with a CTA */
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-4">
          <div className="w-16 h-16 bg-rivaaz-rose rounded-full flex items-center justify-center text-rivaaz-red mb-2">
            <MessageSquarePlus size={32} />
          </div>
          <h4 className="font-tradition text-lg font-bold text-rivaaz-dark italic">
            Chat with Vendors
          </h4>
          <p className="font-modern text-xs text-slate-400 leading-relaxed">
            Sign in to start a conversation with photographers, florists, and
            planners.
          </p>
          <Link
            to="/login"
            className="w-full py-3 bg-rivaaz-dark text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rivaaz-red transition-all shadow-lg shadow-slate-200"
          >
            Login to Chat
          </Link>
        </div>
      ) : (
        /* AUTHENTICATED STATE */
        <>
          {/* Active Stories / Quick Access */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 border-b border-slate-50 mb-6">
            <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 hover:border-rivaaz-red hover:text-rivaaz-red transition-all">
                <Edit size={20} />
              </div>
              <span className="text-[10px] font-bold text-slate-400">New</span>
            </div>
            {contacts.map((c) => (
              <div
                key={`story-${c.id}`}
                className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-2xl p-0.5 border-2 ${c.online ? "border-rivaaz-red" : "border-transparent"}`}
                >
                  <img
                    src={c.avatar}
                    className="w-full h-full rounded-[0.8rem] object-cover"
                    alt=""
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-500 truncate w-12 text-center">
                  {c.name.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
              size={16}
            />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-slate-50 border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm font-modern focus:ring-2 focus:ring-rivaaz-red/10"
            />
          </div>

          {/* Contact List */}
          <div className="flex-1 space-y-5 overflow-y-auto pr-2 custom-scrollbar">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-2xl transition-all"
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={contact.avatar}
                    className="w-12 h-12 rounded-2xl object-cover shadow-sm"
                    alt={contact.name}
                  />
                  {contact.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="text-sm font-black text-slate-800 font-modern truncate">
                      {contact.name}
                    </h4>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium truncate font-modern">
                    {contact.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <button className="mt-6 w-full py-4 bg-rivaaz-rose/50 text-rivaaz-red rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] font-modern hover:bg-rivaaz-red hover:text-white transition-all">
            See All Messages
          </button>
        </>
      )}
    </div>
  );
};

export default MessengerSidebar;
