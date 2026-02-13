import React from "react";
import { MessageCircle, MoreVertical, CheckCircle2, Phone } from "lucide-react";

const hiredVendors = [
  {
    id: 1,
    name: "Aleksandra Öztürk",
    category: "Photography",
    status: "Confirmed",
    lastContact: "2 hours ago",
    avatar:
      "https://ui-avatars.com/api/?name=Aleksandra+Ozturk&background=E11D48&color=fff",
    price: 3500,
  },
  {
    id: 2,
    name: "Maria De Jong",
    category: "Flowers",
    status: "In Progress",
    lastContact: "Yesterday",
    avatar:
      "https://ui-avatars.com/api/?name=Maria+De+Jong&background=3B82F6&color=fff",
    price: 1750,
  },
];

const VendorTeam = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-black font-tradition text-slate-900 tracking-tight">
          Your Vendor Team
        </h2>
        <p className="text-slate-500 font-medium font-modern mt-1">
          Manage contracts and communications with your hired professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 font-modern">
        {hiredVendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center justify-between group hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={vendor.avatar}
                  className="w-16 h-16 rounded-2xl shadow-sm"
                  alt={vendor.name}
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-4 h-4 rounded-full"></div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-slate-900">
                    {vendor.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      vendor.status === "Confirmed"
                        ? "bg-green-50 text-green-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {vendor.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-tighter">
                  {vendor.category} • Last contact: {vendor.lastContact}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-3 text-slate-400 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all">
                <Phone size={20} />
              </button>
              <button className="p-3 text-slate-400 hover:bg-slate-50 hover:text-rivaaz-red rounded-xl transition-all">
                <MessageCircle size={20} />
              </button>
              <button className="ml-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-rivaaz-red transition-all">
                Manage Contract
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Budget Summary Mini-Widget */}
      <div className="bg-rivaaz-rose p-8 rounded-[2.5rem] border border-rivaaz-rose flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rivaaz-red">
            Total Team Investment
          </p>
          <p className="text-3xl font-black text-rivaaz-dark font-tradition">
            $5,250.00
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-rivaaz-red border border-rivaaz-rose rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rivaaz-red hover:text-white transition-all shadow-sm">
          Export Team List
        </button>
      </div>
    </div>
  );
};

export default VendorTeam;
