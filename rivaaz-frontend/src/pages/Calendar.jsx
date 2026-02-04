import React from "react";
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin } from "lucide-react";

const Calendar = () => {
  const days = [
    { day: "Mon", date: "22" },
    { day: "Tue", date: "23" },
    { day: "Wed", date: "24", active: true },
    { day: "Thu", date: "25" },
    { day: "Fri", date: "26" },
    { day: "Sat", date: "27" },
    { day: "Sun", date: "28" },
  ];

  const schedule = [
    {
      time: "09:00",
      title: "Nail Care Service",
      provider: "Lucy Williams",
      duration: "09:00 - 10:45",
      type: "beauty",
      color: "bg-blue-50 border-blue-400 text-blue-900",
    },
    {
      time: "10:50",
      title: "Dress Fitting",
      location: "125 Court St. Brooklyn",
      duration: "10:50 - 12:15",
      type: "attire",
      color: "bg-lime-50 border-lime-400 text-lime-900",
    },
    {
      time: "13:00",
      title: "Lunch with Bridesmaids",
      location: "The Garden Café",
      duration: "13:00 - 14:30",
      type: "social",
      color: "bg-orange-50 border-orange-400 text-orange-900",
    },
    {
      time: "15:00",
      title: "Cake Tasting",
      provider: "Sweet Moments Bakery",
      duration: "15:00 - 16:00",
      type: "food",
      color: "bg-purple-50 border-purple-400 text-purple-900",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Schedule
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Manage your appointments and wedding timeline.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
          <Plus size={20} />
          <span>New Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Schedule Area */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
          {/* Date Selector */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-black text-slate-900">
                September 2026
              </h3>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-900">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-900">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              Today
            </button>
          </div>

          {/* Week View */}
          <div className="grid grid-cols-7 gap-2 mb-12">
            {days.map((item) => (
              <div key={item.date} className="text-center group cursor-pointer">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
                  {item.day}
                </p>
                <div
                  className={`w-12 h-12 mx-auto flex items-center justify-center rounded-2xl font-black text-lg transition-all ${item.active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-slate-900 hover:bg-slate-50"}`}
                >
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          {/* Time Slotted Agenda */}
          <div className="space-y-6 relative before:absolute before:left-[52px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
            {schedule.map((event, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="w-10 pt-1 text-sm font-black text-slate-400">
                  {event.time}
                </div>
                <div
                  className={`flex-1 p-5 rounded-3xl border-l-4 ${event.color} transition-transform hover:scale-[1.01] cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-lg">{event.title}</h4>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 bg-white/50 px-2 py-1 rounded-lg">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 opacity-80">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Clock size={14} />
                      {event.duration}
                    </div>
                    {event.provider && (
                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        <span className="w-4 h-4 rounded-full bg-current opacity-20"></span>
                        {event.provider}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        <MapPin size={14} />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Upcoming & Tasks */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
            <h4 className="text-xl font-black mb-6">Upcoming Next</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black">
                  24
                </div>
                <div>
                  <p className="font-bold">Bridal Party Meeting</p>
                  <p className="text-xs text-slate-400">18:00 PM • Zoom</p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black">
                  25
                </div>
                <div>
                  <p className="font-bold">Final RSVP Check</p>
                  <p className="text-xs text-slate-400">All Day</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-sm transition-colors">
              View Monthly Calendar
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-[2.5rem] p-8">
            <h4 className="text-lg font-black text-slate-900 mb-4">
              Planning Tip
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Don't forget to schedule "buffer time" between appointments to
              account for travel and unexpected delays!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
