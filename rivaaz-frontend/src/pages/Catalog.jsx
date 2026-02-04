import React, { useState } from "react";
import { Search, Star, MapPin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Photography",
  "Flowers",
  "Beauty & Health",
  "Lighting & Decor",
  "Wedding Cakes",
  "Band",
  "Transportation",
];

// Backend-ready data structure: Images are in an array, price is numeric
const vendors = [
  {
    id: 1,
    name: "Aleksandra Öztürk",
    rating: 5.0,
    location: "California, USA",
    price: 3500,
    category: "Photography",
    avatar:
      "https://ui-avatars.com/api/?name=Aleksandra+Ozturk&background=E11D48&color=fff",
    gallery: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=400",
    ],
  },
  {
    id: 2,
    name: "Maria De Jong",
    rating: 4.8,
    location: "New York, USA",
    price: 1750,
    category: "Flowers",
    avatar:
      "https://ui-avatars.com/api/?name=Maria+De+Jong&background=3B82F6&color=fff",
    gallery: [
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=400",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
    ],
  },
  {
    id: 3,
    name: "Hanna Murphy",
    rating: 4.9,
    location: "San Diego, USA",
    price: 1200,
    category: "Beauty & Health",
    avatar:
      "https://ui-avatars.com/api/?name=Hanna+Murphy&background=F472B6&color=fff",
    gallery: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
      "https://images.unsplash.com/photo-1502033006960-a1b5c490ec0f?w=400",
    ],
  },
  {
    id: 4,
    name: "Davit Novák",
    rating: 5.0,
    location: "Chicago, USA",
    price: 1250,
    category: "Lighting & Decor",
    avatar:
      "https://ui-avatars.com/api/?name=Davit+Novak&background=0F172A&color=fff",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
      "https://images.unsplash.com/photo-1502033006960-a1b5c490ec0f?w=400",
    ],
  },
];

const Catalog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("View all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesCategory =
      activeCategory === "View all" || vendor.category === activeCategory;
    const matchesSearch = vendor.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-20">
      {/* Search and Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black font-tradition text-rivaaz-dark">
            Catalog
          </h2>
          <p className="text-slate-500 font-modern font-medium mt-1">
            Discover premium vendors for your dream wedding.
          </p>
        </div>
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Rivaaz services..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rivaaz-primary/20 transition-all font-modern font-medium"
          />
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar font-modern">
        <button
          onClick={() => setActiveCategory("View all")}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all border ${
            activeCategory === "View all"
              ? "bg-rivaaz-primary text-white border-rivaaz-primary shadow-lg shadow-blue-200"
              : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
          }`}
        >
          View all
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all border ${
              activeCategory === cat
                ? "bg-rivaaz-primary text-white border-rivaaz-primary shadow-lg shadow-blue-200"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden group hover:shadow-romantic transition-all duration-500"
          >
            {/* Multi-Image Gallery Grid (Matches Screenshot) */}
            <div className="relative h-56 grid grid-cols-3 gap-1 p-1">
              {vendor.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`w-full h-full object-cover 
                    ${idx === 0 ? "rounded-l-[2rem]" : ""} 
                    ${idx === 2 ? "rounded-r-[2rem]" : ""}`}
                  alt={`${vendor.name} work`}
                />
              ))}

              <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-rivaaz-red transition-all shadow-sm z-10">
                <Heart size={18} />
              </button>

              {/* Overlapping Profile Avatar (Matches Screenshot) */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden ring-1 ring-slate-100">
                  <img
                    src={vendor.avatar}
                    className="w-full h-full object-cover"
                    alt={vendor.name}
                  />
                </div>
              </div>
            </div>

            {/* Vendor Info Content */}
            <div className="pt-10 p-6 text-center space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-black font-tradition text-rivaaz-dark group-hover:text-rivaaz-red transition-colors">
                  {vendor.name}
                </h3>
                <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 font-modern">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={12} fill="currentColor" />
                    <span>{vendor.rating.toFixed(1)}</span>
                  </div>
                  <span className="opacity-30">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-rivaaz-pink" />
                    <span>{vendor.location}</span>
                  </div>
                </div>
              </div>

              {/* Price and Category Badges */}
              <div className="flex justify-center gap-2">
                <span className="px-4 py-1.5 bg-blue-50 text-rivaaz-primary rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
                  ${vendor.price.toLocaleString()}
                </span>
                <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">
                  {vendor.category}
                </span>
              </div>

              <button
                onClick={() => navigate(`/vendor/${vendor.id}`)}
                className="w-full mt-2 py-3.5 bg-rivaaz-dark text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rivaaz-primary transition-all active:scale-95 shadow-lg shadow-slate-200"
              >
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVendors.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
          <p className="text-slate-400 font-black font-modern">
            No vendors found matching your criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory("View all");
              setSearchQuery("");
            }}
            className="mt-4 text-rivaaz-red font-black text-sm uppercase tracking-widest hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
