import React, { useState } from "react";
import {
  Edit3,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";

const Profile = () => {
  const [selectedStyle, setSelectedStyle] = useState("Traditional");

  const inspiration = [
    {
      name: "Flowers",
      img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=200",
    },
    {
      name: "Photographer",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200",
    },
    {
      name: "Cakes",
      img: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?w=200",
    },
    {
      name: "DJ",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200",
    },
  ];

  return (
    <div className="space-y-8 pb-20 relative">
      {/* 1. Cover Image Section */}
      <div className="relative h-80 w-full rounded-[3.5rem] overflow-hidden shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200"
          className="w-full h-full object-cover"
          alt="Wedding Cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* AI Assistant Button Floating on Cover */}
        <button className="absolute bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all z-10">
          <Zap size={18} fill="currentColor" />
          <span className="text-sm">AI Assistant</span>
        </button>
      </div>

      {/* 2. Overlapping Identity Row */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8">
        {/* Life Profile Card (Left Column) */}
        <div className="lg:w-80 flex-shrink-0 -mt-32 relative z-20">
          <div className="bg-white rounded-[3rem] p-8 shadow-romantic border border-slate-50 flex flex-col items-center text-center">
            {/* Avatar with JH */}
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-[2.5rem] border-[6px] border-white shadow-xl overflow-hidden group">
                <img
                  src="https://ui-avatars.com/api/?name=Juliet+Hansen&background=E11D48&color=fff"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  alt="Avatar"
                />
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-rivaaz-red text-white rounded-xl shadow-lg hover:bg-rivaaz-pink transition-all">
                <Edit3 size={14} />
              </button>
            </div>

            <h2 className="text-2xl font-black font-tradition text-rivaaz-dark">
              Juliet Hansen
            </h2>
            <p className="text-slate-400 text-xs font-modern font-bold mb-4">
              juliet.hansen@gmail.com
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold font-modern mb-8 justify-center">
              <MapPin size={14} className="text-rivaaz-pink" />
              <span>Florida, USA</span>
            </div>

            <button className="w-full py-4 bg-rivaaz-rose text-rivaaz-red rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rivaaz-red hover:text-white transition-all shadow-sm">
              Edit your profile
            </button>
          </div>

          {/* About Section */}
          <div className="mt-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black font-tradition text-rivaaz-dark mb-4">
              About
            </h3>
            <p className="text-slate-500 font-medium font-modern leading-relaxed text-sm">
              Hi! I'm your Rivaaz companion. I'm here to help you navigate the
              community and your special day with ease.
            </p>
          </div>
        </div>

        {/* Right Column Content */}
        <div className="flex-1 space-y-8 lg:pt-4">
          {/* Tabs / Filter Row */}
          <div className="flex gap-4 mb-4 font-modern">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-sm">
              Wedding
            </button>
            <button className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full font-bold text-sm hover:bg-slate-200">
              Saved
            </button>
            <button className="px-6 py-2 bg-slate-100 text-slate-500 rounded-full font-bold text-sm hover:bg-slate-200">
              Vendor Team
            </button>
          </div>

          {/* Style Selector */}
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles size={120} className="text-rivaaz-pink" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 font-modern">
              Your Wedding Style is
            </p>
            <div className="flex items-center justify-between">
              <button className="p-4 hover:bg-rivaaz-rose rounded-full text-slate-300 transition-colors">
                <ChevronLeft size={40} />
              </button>
              <div className="flex-1">
                <h4 className="text-7xl font-black font-tradition text-rivaaz-dark mb-4 transition-all duration-500">
                  {selectedStyle}
                </h4>
                <div className="flex justify-center gap-4 mt-8">
                  {["#F472B6", "#E11D48", "#FDA4AF", "#FCE7F3"].map((color) => (
                    <div
                      key={color}
                      className="w-10 h-10 rounded-full border-4 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <button className="p-4 hover:bg-rivaaz-rose rounded-full text-slate-300 transition-colors">
                <ChevronRight size={40} />
              </button>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-slate-50 pt-10 text-center">
              <div>
                <p className="text-[11px] font-black uppercase text-rivaaz-pink tracking-widest mb-3 font-modern">
                  Style
                </p>
                <p className="text-sm font-bold text-slate-700 font-modern">
                  Rustic and affordable, with a touch of simple
                </p>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase text-rivaaz-pink tracking-widest mb-3 font-modern">
                  Setting
                </p>
                <p className="text-sm font-bold text-slate-700 font-modern">
                  A loft, a mountain, or a farm & ranch
                </p>
              </div>
            </div>
          </div>

          {/* Inspiration Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-tradition text-rivaaz-dark">
              Our Wedding Inspiration
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {inspiration.map((item, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl flex items-center gap-2 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <span className="text-rivaaz-red font-black text-[10px] uppercase tracking-tighter">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
