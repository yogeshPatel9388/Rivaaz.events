import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get the ID from the URL
import {
  Star,
  MapPin,
  CheckCircle2,
  Globe,
  Facebook,
  Instagram,
  Heart,
  Share2,
} from "lucide-react";
import SkeletonLoader from "../components/shared/SkeletonLoader"; // Use your existing loader

const VendorDetail = () => {
  const { id } = useParams(); // URL looks like /vendor/65abc123...
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        // Replace with your actual backend URL
        const response = await fetch(`http://localhost:5000/api/vendors/${id}`);
        const data = await response.json();
        setVendor(data);
        if (data.plans?.length > 0) setSelectedPlan(data.plans[1].name); // Default to Advanced
      } catch (error) {
        console.error("Error fetching vendor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendorData();
  }, [id]);

  if (loading)
    return (
      <div className="max-w-7xl mx-auto p-10">
        <SkeletonLoader type="card" />
      </div>
    );
  if (!vendor)
    return (
      <div className="text-center py-20 font-tradition text-2xl">
        Vendor not found.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      {/* 1. Immersive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
        <div className="md:col-span-2 md:row-span-2 rounded-[3rem] overflow-hidden group relative">
          <img
            src={vendor.gallery[0]}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Main"
          />
          <div className="absolute top-6 left-6 flex gap-2">
            <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-rivaaz-red transition-all shadow-lg">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-rivaaz-dark transition-all shadow-lg">
              <Share2 size={20} />
            </button>
          </div>
        </div>
        {/* Map through secondary images if available */}
        {vendor.gallery.slice(1, 4).map((img, index) => (
          <div
            key={index}
            className={`rounded-[2.5rem] overflow-hidden group ${index === 2 ? "md:col-span-2" : ""}`}
          >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={`Sub ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={`https://ui-avatars.com/api/?name=${vendor.name}&background=E11D48&color=fff`}
                  className="w-24 h-24 rounded-[2rem] shadow-romantic"
                  alt={vendor.name}
                />
                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-sm">
                  <CheckCircle2
                    className="text-blue-500"
                    size={20}
                    fill="currentColor"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black text-rivaaz-dark font-tradition tracking-tight">
                  {vendor.name}
                </h1>
                <div className="flex items-center gap-2 mt-2 text-slate-400 font-modern font-bold uppercase tracking-widest text-[10px]">
                  <MapPin size={14} className="text-rivaaz-red" />
                  <span>{vendor.location}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 border-l border-slate-100 pl-8">
              <div className="text-center">
                <p className="text-2xl font-black text-rivaaz-dark leading-none">
                  {vendor.rating.toFixed(1)}
                </p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">
                  Rating
                </p>
              </div>
              {/* Add other stats as fields in your DB later */}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black text-rivaaz-dark font-tradition italic">
              About the {vendor.category}
            </h3>
            <p className="text-slate-600 leading-relaxed font-modern font-medium text-lg">
              {vendor.about ||
                "Welcome to Rivaaz premium services. We provide world-class experiences for your special day."}
            </p>
          </div>
        </div>

        {/* Right Sidebar: Pricing & Contact */}
        <div className="relative">
          <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-romantic sticky top-32">
            <h3 className="text-xl font-black text-rivaaz-dark mb-8 font-tradition italic">
              Choose Your Experience
            </h3>

            <div className="space-y-3 mb-10">
              {vendor.plans?.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full p-5 rounded-3xl border-2 transition-all text-left flex justify-between items-center ${
                    selectedPlan === plan.name
                      ? "border-rivaaz-red bg-rivaaz-rose/50"
                      : "border-slate-50 bg-slate-50"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${selectedPlan === plan.name ? "text-rivaaz-red" : "text-slate-400"}`}
                    >
                      {plan.name}
                    </span>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {plan.desc}
                    </p>
                  </div>
                  <span className="text-lg font-black text-rivaaz-dark">
                    {plan.price}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full py-5 bg-rivaaz-red text-white rounded-[1.5rem] font-black text-lg shadow-lg shadow-rose-200 hover:scale-[1.02] transition-all">
                Book for My Wedding
              </button>
              <button className="w-full py-5 bg-white border-2 border-slate-100 text-rivaaz-dark rounded-[1.5rem] font-black text-lg hover:bg-slate-50 transition-all">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
