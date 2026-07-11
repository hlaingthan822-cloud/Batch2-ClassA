"use client";

export default function ProductCard({ title, price, tag, isStocked }) {
  return (
    /* 1. Box Model & Typography Layer */
    <div
      className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all 
    duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* 2. Flexbox Configuration & Conditional Styles */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs 
        font-semibold text-indigo-600"
        >
          {tag}
        </span>
        <span
          className={`h-2.5 w-2.5 rounded-full ${isStocked ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`}
        />
      </div>

      {/* 3. Responsive Typography Engine */}
      <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed mb-6">
        High-performance node system engineered for real-time application
        pipelines and low-latency infrastructure synchronization.
      </p>

      {/* 4. Interactive States (Hover/Focus/Active) */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-2xl font-extrabold text-slate-900">${price}</span>
        <button
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white 
        transition-colors duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 
        focus:ring-slate-900 focus:ring-offset-2 active:scale-95"
        >
          Deploy Agent
        </button>
      </div>
    </div>
  );
}
