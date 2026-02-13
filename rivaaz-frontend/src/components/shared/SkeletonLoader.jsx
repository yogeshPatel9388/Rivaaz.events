import React from "react";

const SkeletonLoader = ({ type = "card" }) => {
  // Shimmer animation class
  const shimmer =
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

  if (type === "card") {
    return (
      <div className="mb-6 bg-white rounded-[2.5rem] border border-slate-100 p-5 space-y-4">
        {/* Shimmering Image Placeholder */}
        <div
          className={`aspect-[4/5] w-full bg-slate-100 rounded-[2rem] ${shimmer}`}
        ></div>

        {/* Shimmering Text Placeholders */}
        <div className="space-y-3 px-2">
          <div
            className={`h-3 w-1/4 bg-rivaaz-rose/30 rounded-full ${shimmer}`}
          ></div>
          <div
            className={`h-5 w-3/4 bg-slate-100 rounded-full ${shimmer}`}
          ></div>
          <div
            className={`h-6 w-1/2 bg-slate-200 rounded-full ${shimmer}`}
          ></div>
        </div>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
