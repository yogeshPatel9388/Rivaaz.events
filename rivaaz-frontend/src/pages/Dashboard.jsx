import React, { useEffect, useState } from "react";
import { Camera, Music, Flower2, Utensils, Loader2 } from "lucide-react";
import MessengerSidebar from "../components/dashboard/MessengerSidebar";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../services/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    remaining: 0,
    percentage: 0,
  });
  const [loading, setLoading] = useState(true);
  const [investment, setInvestment] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      // If no user is logged in, we stay in "Guest Mode" with default 0/placeholder stats
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const [taskRes, teamRes] = await Promise.all([
          api.get("/tasks/stats"),
          api.get("/bookings/my-team"),
        ]);
        setStats(taskRes.data);
        setInvestment(teamRes.data.totalInvestment || 0);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]); // Re-run whenever user login status changes

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-rivaaz-red" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold font-tradition text-rivaaz-dark tracking-tight">
            {user ? (
              <>
                Welcome{" "}
                <span className="text-rivaaz-red italic">{user.names}!</span> 💍
              </>
            ) : (
              <>
                Plan your{" "}
                <span className="text-rivaaz-red italic">Dream Wedding</span> ✨
              </>
            )}
          </h2>
          <p className="text-slate-500 mt-2 font-medium font-modern">
            {user ? (
              <>
                You have{" "}
                <span className="text-rivaaz-red font-bold">
                  {stats.remaining} tasks
                </span>{" "}
                left for the arrangements.
              </>
            ) : (
              "Join Rivaaz to manage your tasks, budget, and suppliers in one place."
            )}
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
            <p className="text-2xl font-black text-rivaaz-dark">
              ${user ? investment.toLocaleString() : "0"}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-rivaaz-pink to-rivaaz-red h-full transition-all duration-1000"
                  style={{ width: `${user ? stats.percentage : 0}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {user ? `${stats.percentage}% Progress` : "Guest View"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm min-h-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold font-tradition text-rivaaz-dark">
                Schedule
              </h3>
              <button className="text-rivaaz-red text-sm font-bold font-modern hover:underline decoration-2 underline-offset-4">
                View all
              </button>
            </div>
            <div className="text-center py-20 text-slate-300 font-modern italic">
              {user
                ? "No events scheduled for today. Take a rest!"
                : "Login to view your wedding timeline."}
            </div>
          </div>

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
                  <div className="absolute bottom-3 left-2 right-2 bg-white/90 backdrop-blur-md px-2 py-2 rounded-xl flex items-center gap-2">
                    <span className="text-rivaaz-red">{item.icon}</span>
                    <span className="text-[9px] font-black uppercase text-slate-700">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 text-white h-[220px] shadow-romantic">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500"
              className="absolute inset-0 object-cover w-full h-full"
              alt="countdown"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rivaaz-red/90 via-rivaaz-pink/40 to-black/10" />
            <div className="relative z-10 text-center flex flex-col h-full justify-center">
              <p className="text-[10px] font-black font-modern uppercase tracking-[0.4em] mb-4">
                The Wedding Will Start In:
              </p>
              <div className="flex justify-between items-center text-4xl font-bold font-tradition px-4">
                <div>
                  17
                  <p className="font-modern text-[10px] opacity-80 uppercase mt-1">
                    Days
                  </p>
                </div>
                <span className="opacity-40">:</span>
                <div>
                  14
                  <p className="font-modern text-[10px] opacity-80 uppercase mt-1">
                    Hours
                  </p>
                </div>
                <span className="opacity-40">:</span>
                <div>
                  11
                  <p className="font-modern text-[10px] opacity-80 uppercase mt-1">
                    Min
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MessengerSidebar />

          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold font-tradition text-rivaaz-dark mb-8">
              Tasks Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-modern">
                <span className="text-slate-500">Completed</span>
                <span className="font-black text-green-500">
                  {user ? stats.completed : 0}
                </span>
              </div>
              <div className="flex justify-between text-sm font-modern">
                <span className="text-slate-500">Pending</span>
                <span className="font-black text-rivaaz-red">
                  {user ? stats.remaining : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
