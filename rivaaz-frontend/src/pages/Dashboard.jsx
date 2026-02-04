import React from "react";
import { Camera, Music, Flower2, Utensils, CheckCircle2 } from "lucide-react";
import MessengerSidebar from "../components/dashboard/MessengerSidebar";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold font-tradition text-rivaaz-dark tracking-tight">
            Welcome{" "}
            <span className="text-rivaaz-red italic">Hanuman Sir & BhabiJi !</span> 💍
          </h2>
          <p className="text-slate-500 mt-2 font-medium font-modern">
            You have <span className="text-rivaaz-red font-bold">14 tasks</span>{" "}
            left for the wedding arrangements. Prioritize them.
          </p>
        </div>

        {/* Budget Summary Card */}
        <div className="bg-white p-4 px-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02]">
          <div className="p-3 bg-rivaaz-rose rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
              className="w-6 h-6"
              alt="piggy bank"
            />
          </div>
          <div className="font-modern">
            <p className="text-2xl font-black text-rivaaz-dark">$32,420</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-rivaaz-pink to-rivaaz-red h-full w-[85%]"></div>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                23/27 Hired
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Schedule & Suppliers (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Schedule Section */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm min-h-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold font-tradition text-rivaaz-dark">
                Schedule
              </h3>
              <button className="text-rivaaz-red text-sm font-bold font-modern hover:underline decoration-2 underline-offset-4">
                View all
              </button>
            </div>

            <div className="space-y-6 font-modern">
              {/* Event Item 1 */}
              <div className="flex gap-6 group cursor-pointer">
                <div className="text-sm font-black text-slate-300 w-12 pt-1 transition-colors group-hover:text-rivaaz-pink">
                  09:00
                </div>
                <div className="flex-1 bg-rivaaz-rose/30 border-l-4 border-rivaaz-pink p-5 rounded-2xl group-hover:bg-rivaaz-rose/50 transition-all shadow-sm">
                  <p className="font-bold text-rivaaz-dark text-base">
                    Nail Care Service (Lucy W.)
                  </p>
                  <p className="text-[10px] text-rivaaz-pink font-black uppercase mt-1 tracking-widest">
                    09:00 - 10:45
                  </p>
                </div>
              </div>
              {/* Event Item 2 */}
              <div className="flex gap-6 group cursor-pointer">
                <div className="text-sm font-black text-slate-300 w-12 pt-1 transition-colors group-hover:text-rivaaz-red">
                  10:50
                </div>
                <div className="flex-1 bg-orange-50/30 border-l-4 border-orange-400 p-5 rounded-2xl group-hover:bg-orange-50/50 transition-all shadow-sm">
                  <p className="font-bold text-rivaaz-dark text-base">
                    Dress Fitting (125 Court St.)
                  </p>
                  <p className="text-[10px] text-orange-600 font-black uppercase mt-1 tracking-widest">
                    10:50 - 12:15
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Suppliers Section */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-tradition text-rivaaz-dark">
                My suppliers
              </h3>
              <button className="text-rivaaz-red text-sm font-bold font-modern hover:underline decoration-2 underline-offset-4">
                View all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-modern">
              {[
                {
                  name: "Flowers",
                  icon: <Flower2 size={18} />,
                  img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=200",
                },
                {
                  name: "Photographer",
                  icon: <Camera size={18} />,
                  img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200",
                },
                {
                  name: "Cakes",
                  icon: <Utensils size={18} />,
                  img: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?w=200",
                },
                {
                  name: "DJ",
                  icon: <Music size={18} />,
                  img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-romantic transition-all"
                >
                  <img
                    src={item.img}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-3 left-2 right-2 bg-white/90 backdrop-blur-md px-2 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                    <span className="text-rivaaz-red">{item.icon}</span>
                    <span className="text-[9px] font-black uppercase text-slate-700 tracking-tighter">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Countdown Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 text-white h-[220px] shadow-romantic">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500"
              className="absolute inset-0 object-cover w-full h-full"
              alt="countdown background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rivaaz-red/90 via-rivaaz-pink/40 to-black/10" />
            <div className="relative z-10 text-center flex flex-col h-full justify-center">
              <p className="text-[10px] font-black font-modern uppercase tracking-[0.4em] mb-4 opacity-90">
                The Wedding Will Start In:
              </p>
              <div className="flex justify-between items-center text-4xl font-bold font-tradition px-4">
                <div>
                  17
                  <p className="font-modern text-[10px] opacity-80 uppercase tracking-widest mt-1">
                    Days
                  </p>
                </div>
                <span className="opacity-40 font-light">:</span>
                <div>
                  14
                  <p className="font-modern text-[10px] opacity-80 uppercase tracking-widest mt-1">
                    Hours
                  </p>
                </div>
                <span className="opacity-40 font-light">:</span>
                <div>
                  11
                  <p className="font-modern text-[10px] opacity-80 uppercase tracking-widest mt-1">
                    Min
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Messenger Sidebar */}
          <MessengerSidebar />

          {/* Upcoming Events Mini-Widget */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold font-tradition text-rivaaz-dark">
                Upcoming Events
              </h3>
              <button className="bg-rivaaz-red hover:bg-rivaaz-pink text-white px-5 py-2.5 rounded-xl text-[11px] font-black transition-all shadow-lg shadow-pink-100 active:scale-95 font-modern uppercase tracking-wider">
                View all
              </button>
            </div>
            <div className="space-y-6 font-modern">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-rivaaz-rose flex items-center justify-center text-rivaaz-pink shadow-sm transition-transform group-hover:scale-110">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-none group-hover:text-rivaaz-red transition-colors">
                    Dress Fitting 👗
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1.5 uppercase tracking-tighter">
                    29 Mar 2026 • Beauty
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 shadow-sm transition-transform group-hover:scale-110">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-none group-hover:text-rivaaz-red transition-colors">
                    Engagement Ceremony 💎
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1.5 uppercase tracking-tighter">
                    31 Mar 2026 • Ceremony
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
