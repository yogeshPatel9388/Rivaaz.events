import React from "react";
import {
  Plus,
  DollarSign,
  ArrowUpRight,
  Filter,
  MoreHorizontal,
} from "lucide-react";

const budgetCategories = [
  {
    id: 1,
    name: "Venue & Catering",
    spent: 12500,
    total: 15000,
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Photography",
    spent: 3500,
    total: 4000,
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "Decoration",
    spent: 2100,
    total: 5000,
    color: "bg-emerald-500",
  },
  { id: 4, name: "Attire", spent: 1800, total: 2500, color: "bg-amber-500" },
];

const CostGuide = () => {
  const totalBudget = 30000;
  const totalSpent = budgetCategories.reduce(
    (acc, curr) => acc + curr.spent,
    0,
  );
  const percentage = Math.round((totalSpent / totalBudget) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Cost Guide
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Track your wedding expenses and budget allocation.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
          <Plus size={20} />
          <span>Add Expense</span>
        </button>
      </div>

      {/* Main Budget Card */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue-400 font-black uppercase tracking-[0.2em] text-sm">
              Estimated Budget
            </p>
            <h3 className="text-6xl font-black">
              ${totalSpent.toLocaleString()}{" "}
              <span className="text-2xl text-slate-500">
                / ${totalBudget.toLocaleString()}
              </span>
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between font-bold text-sm">
                <span>Total Progress</span>
                <span>{percentage}%</span>
              </div>
              <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
              <p className="text-slate-400 text-xs font-bold uppercase mb-2">
                Remaining
              </p>
              <p className="text-2xl font-black">
                ${(totalBudget - totalSpent).toLocaleString()}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
              <p className="text-slate-400 text-xs font-bold uppercase mb-2">
                Booked
              </p>
              <p className="text-2xl font-black">12 Vendors</p>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Breakdown Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xl font-black text-slate-900 px-2">
              Expense Breakdown
            </h4>
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <Filter size={20} />
            </button>
          </div>

          {budgetCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:border-blue-200 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-white shadow-inner`}
              >
                <DollarSign size={24} />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                      {cat.name}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      ${cat.spent.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-400">
                    ${cat.total.toLocaleString()}
                  </p>
                </div>
                <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${cat.color} rounded-full`}
                    style={{ width: `${(cat.spent / cat.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Tips / Savings Sidebar */}
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
              <ArrowUpRight size={24} />
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-2">
              Saving Tip
            </h4>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Booking your venue and catering as a package can save you up to
              15% on your total budget.
            </p>
            <button className="mt-4 text-sm font-black text-blue-600 hover:underline">
              Read Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostGuide;
