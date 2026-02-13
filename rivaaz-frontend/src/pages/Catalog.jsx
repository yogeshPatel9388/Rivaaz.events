import React, { useState, useEffect } from "react";
import { Search, Star, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import SkeletonLoader from "../components/shared/SkeletonLoader";

const categories = [
  "Photography",
  "Flowers",
  "Beauty & Health",
  "Lighting & Decor",
  "Wedding Cakes",
  "Band",
  "Transportation",
  "Venues",
];

const vendors = [
  {
    id: 1,
    name: "Aleksandra Öztürk",
    rating: 5.0,
    location: "California, USA",
    price: 3500,
    category: "Photography",
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
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading for Skeleton effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredVendors = vendors.filter((vendor) => {
    const matchesCategory =
      activeCategory === "View all" || vendor.category === activeCategory;
    const matchesSearch = vendor.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const masonryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black font-tradition text-rivaaz-dark tracking-tight">
            Catalog
          </h2>
          <p className="text-slate-500 font-modern font-medium mt-2">
            Curating the finest details for your celebration.
          </p>
        </div>
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search collections..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rivaaz-primary/10 transition-all font-modern"
          />
        </div>
      </div>

      {/* Category Pills - Scrollable with NO visible scrollbar */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        <button
          onClick={() => setActiveCategory("View all")}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all border ${
            activeCategory === "View all"
              ? "bg-rivaaz-red text-white shadow-romantic border-rivaaz-red"
              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
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
                ? "bg-rivaaz-primary text-white shadow-lg shadow-blue-100 border-rivaaz-primary"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Magazine-style Masonry Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      ) : (
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="group cursor-pointer mb-8"
              onClick={() => navigate(`/vendor/${vendor.id}`)}
            >
              {/* Image Gallery Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm mb-6 bg-white">
                <div className="grid grid-cols-3 h-full gap-1 min-h-[240px]">
                  {vendor.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt={`${vendor.name} inspiration`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-rivaaz-red transition-all">
                  <Heart size={20} />
                </button>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rivaaz-accent mb-1">
                      {vendor.category}
                    </p>
                    <h3 className="text-2xl font-bold font-tradition text-white leading-tight">
                      {vendor.name}
                    </h3>
                  </div>
                  <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-xl flex items-center gap-1 text-rivaaz-red shadow-sm">
                    <span className="text-xs font-black">
                      ${vendor.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-info section */}
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 font-modern">
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={12}
                      className="text-rivaaz-red"
                      fill="currentColor"
                    />
                    <span>{vendor.rating.toFixed(1)} Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>{vendor.location}</span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-300 group-hover:text-rivaaz-red transition-colors"
                />
              </div>
            </div>
          ))}
        </Masonry>
      )}

      {/* Empty State */}
      {!isLoading && filteredVendors.length === 0 && (
        <div className="text-center py-32 bg-white rounded-[3rem] border border-slate-100">
          <p className="text-slate-400 font-black font-modern uppercase tracking-widest text-sm">
            No results in this collection
          </p>
          <button
            onClick={() => {
              setActiveCategory("View all");
              setSearchQuery("");
            }}
            className="mt-6 text-rivaaz-red font-black text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
