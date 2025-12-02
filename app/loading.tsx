export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-600 border-t-amber-400" />
        <p className="text-xs tracking-[0.2em] text-slate-300 uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
