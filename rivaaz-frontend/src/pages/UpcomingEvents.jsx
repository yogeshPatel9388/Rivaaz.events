import React from "react";
import { CheckCircle2, Diamond, Scissors, Camera } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Morning • Dress Fitting",
    date: "29 Mar 2026",
    category: "Beauty",
    icon: <Scissors size={18} />,
    color: "bg-category-beauty text-pink-600",
  },
  {
    id: 2,
    title: "Afternoon • Engagement Ceremony",
    date: "31 Mar 2026",
    category: "Ceremony",
    icon: <Diamond size={18} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Evening • Photo Posing Workshop",
    date: "07 Apr 2026",
    category: "Photography",
    icon: <Camera size={18} />,
    color: "bg-purple-100 text-purple-600",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold font-tradition text-rivaaz-dark">
          Upcoming Events
        </h3>
        <button className="text-rivaaz-red text-xs font-bold font-modern hover:underline">
          View all
        </button>
      </div>

      <div className="space-y-5 font-modern">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 ${event.color}`}
            >
              {event.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800 leading-none group-hover:text-rivaaz-red transition-colors">
                {event.title}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                  {event.date}
                </span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-[10px] text-rivaaz-pink font-black uppercase tracking-tighter">
                  {event.category}
                </span>
              </div>
            </div>
            <CheckCircle2
              size={20}
              className="text-slate-200 group-hover:text-green-500 transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
