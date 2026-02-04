import React, { useState } from "react";
import {
  Star,
  MapPin,
  Users,
  Briefcase,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Facebook,
  Instagram,
} from "lucide-react";

const VendorDetail = () => {
  const [selectedPlan, setSelectedPlan] = useState("Advanced");

  const gallery = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400",
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Banner & Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[500px]">
        <div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] overflow-hidden">
          <img
            src={gallery[0]}
            className="w-full h-full object-cover"
            alt="Main"
          />
        </div>
        <div className="rounded-[2.5rem] overflow-hidden">
          <img
            src={gallery[1]}
            className="w-full h-full object-cover"
            alt="Sub 1"
          />
        </div>
        <div className="rounded-[2.5rem] overflow-hidden">
          <img
            src={gallery[2]}
            className="w-full h-full object-cover"
            alt="Sub 2"
          />
        </div>
        <div className="md:col-span-2 rounded-[2.5rem] overflow-hidden">
          <img
            src={gallery[3]}
            className="w-full h-full object-cover"
            alt="Sub 3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content: Info & About */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src="https://ui-avatars.com/api/?name=Matt+Jones&background=random"
                className="w-20 h-20 rounded-3xl"
                alt="Matt Jones"
              />
              <div>
                <h1 className="text-3xl font-black text-slate-900">
                  Eternal Moments Studio 📸
                </h1>
                <div className="flex items-center gap-2 mt-1 text-slate-500 font-medium">
                  <MapPin size={18} className="text-blue-600" />
                  <span>Los Angeles, California</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 border-l-2 border-slate-100 pl-6">
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">5.0</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Rating
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">200</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Couples
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black text-slate-900">160+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Reviews
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Eternal Moments Studio is a family-owned business serving the LA
              area. Founded by Matt Jones, the company specializes in
              refreshingly simple and refined photography with an abundance of
              natural light. Devoted to providing a stress-free experience for
              our couples.
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "High-Res Images",
              "One Event / Day",
              "Multiple Locations",
              "Digital Files",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl"
              >
                <CheckCircle2 className="text-blue-500" size={20} />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Pricing & Contact */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/5 sticky top-24">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Pricing Plans
            </h3>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {[
                { name: "Basic", price: "$1,495" },
                { name: "Advanced", price: "$2,750" },
                { name: "Dream+", price: "$4,250" },
              ].map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`p-3 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${selectedPlan === plan.name ? "border-blue-600 bg-blue-50/50" : "border-slate-50 bg-slate-50"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-tighter ${selectedPlan === plan.name ? "text-blue-600" : "text-slate-400"}`}
                  >
                    {plan.name}
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {plan.price}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                Message Matt
              </button>
              <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                Request Pricing
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between text-slate-400">
                <Globe size={20} />
                <Facebook size={20} />
                <Instagram size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
