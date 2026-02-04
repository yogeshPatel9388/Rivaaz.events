import React from "react";
import { MoreHorizontal, Edit, Search, CheckCircle2 } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Cynthia Williams",
    message: "Those boutiques, stunning, right? 😍",
    time: "Just now",
    online: true,
    avatar:
      "https://ui-avatars.com/api/?name=Cynthia+Williams&background=random",
  },
  {
    id: 2,
    name: "Mark Rober",
    message: "You sure? 😄 Twenty 30-second applic...",
    time: "3 hours ago",
    online: false,
    avatar: "https://ui-avatars.com/api/?name=Mark+Rober&background=random",
  },
  {
    id: 3,
    name: "Amina Hansen",
    message: "I recently went through a tough br...",
    time: "5 hours ago",
    online: true,
    avatar: "https://ui-avatars.com/api/?name=Amina+Hansen&background=random",
  },
];

const MessengerSidebar = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black text-rivaaz-dark font-tradition">
          Messenger
        </h3>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400">
            <Edit size={18} />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
          size={16}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-slate-50 border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm font-modern focus:ring-2 focus:ring-rivaaz-primary/20"
        />
      </div>

      {/* Contact List */}
      <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="relative flex-shrink-0">
              <img
                src={contact.avatar}
                className="w-12 h-12 rounded-2xl object-cover shadow-sm"
                alt={contact.name}
              />
              {contact.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-sm font-black text-slate-800 font-modern truncate">
                  {contact.name}
                </h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap">
                  {contact.time}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate font-modern leading-relaxed">
                {contact.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <button className="mt-8 w-full py-4 bg-slate-50 text-rivaaz-primary rounded-2xl font-black text-sm font-modern hover:bg-rivaaz-primary hover:text-white transition-all">
        See all in Messenger
      </button>
    </div>
  );
};

export default MessengerSidebar;
