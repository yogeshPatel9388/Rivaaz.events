import React from "react";
import { Search, Heart, Share2 } from "lucide-react";

const ideaCategories = [
  {
    name: "Flowers",
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=100",
  },
  {
    name: "Ceremony",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=100",
  },
  {
    name: "Cakes",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?w=100",
  },
  {
    name: "Fashion",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100",
  },
  {
    name: "Venues",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=100",
  },
];

const articles = [
  {
    title: "The Prettiest Floral Bridal Earrings for a Garden-Chic Look",
    category: "Rings & Jewelry",
    img: "https://images.unsplash.com/photo-1535633302704-c02f4f7d0220?w=800",
    size: "large",
  },
  {
    title: "31 Beautiful Dresses to Wear to Your Next Summer Wedding",
    category: "Wedding Guests",
    img: "https://images.unsplash.com/photo-1502033006960-a1b5c490ec0f?w=400",
    size: "small",
  },
  {
    title: "24 Honeymoon Dresses for Your First Newlywed Vacay",
    category: "Honeymoon Advice",
    img: "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400",
    size: "small",
  },
  {
    title: "These 15 Cabin Wedding Venues Have All the Rustic Vibes",
    category: "Places to Celebrate",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    size: "small",
  },
];

const Ideas = () => {
  return (
    <div className="space-y-10">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-5xl font-bold font-tradition text-rivaaz-dark">
          Wedding Ideas
        </h2>
        <p className="text-slate-500 font-modern font-medium">
          Planning a wedding is a truly magical experience. We’re offering our
          expertise to help make the process fun and stress-free.
        </p>
        <div className="relative max-w-md mx-auto mt-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Rivaaz articles..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rivaaz-primary/20 transition-all font-modern"
          />
        </div>
      </div>

      {/* Circle Category Navigation */}
      <div className="flex justify-center gap-6 overflow-x-auto py-4 no-scrollbar">
        {ideaCategories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-rivaaz-primary transition-all p-0.5">
              <img
                src={cat.img}
                className="w-full h-full object-cover rounded-full"
                alt={cat.name}
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-rivaaz-primary transition-colors font-modern">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-slate-100 shadow-sm
              ${article.size === "large" ? "md:col-span-2 md:row-span-2" : "row-span-2"}`}
          >
            <img
              src={article.img}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt={article.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rivaaz-primary mb-2 font-modern">
                {article.category}
              </p>
              <h3
                className={`text-white font-tradition leading-tight group-hover:underline
                ${article.size === "large" ? "text-3xl" : "text-xl"}`}
              >
                {article.title}
              </h3>
              <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-white flex items-center gap-1 text-xs font-bold font-modern">
                  <Heart size={14} /> Save
                </button>
                <button className="text-white flex items-center gap-1 text-xs font-bold font-modern">
                  <Share2 size={14} /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
