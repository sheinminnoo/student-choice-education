export default function UniversityFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-between">
      <div className="flex flex-wrap gap-2 text-sm">
        <button className="rounded-full bg-sky-600 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white">
          All
        </button>
        <button className="rounded-full border border-slate-300 px-4 py-1.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-50">
          Highest ranking
        </button>
        <button className="rounded-full border border-slate-300 px-4 py-1.5 text-xs sm:text-sm text-slate-700 hover:bg-slate-50">
          Public universities
        </button>
      </div>

      <div className="flex gap-2 text-sm">
        <select className="h-9 rounded-full border border-slate-300 bg-white px-3 text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500">
          <option>All countries</option>
          <option>United Kingdom</option>
        </select>
        <input
          type="text"
          placeholder="Search by university"
          className="h-9 w-40 sm:w-56 rounded-full border border-slate-300 bg-white px-3 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
    </div>
  );
}
