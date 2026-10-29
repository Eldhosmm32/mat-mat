export default function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9 rounded-xs bg-linear-to-tr from-violet-600 via-purple-600 to-amber-200 flex items-center justify-center shadow-md ">
        <span className="text-white font-medium text-3xl leading-none tracking-tight -mt-0.5">
          M
        </span>
      </div>
      <div>
        <span
          className={`text-lg font-black tracking-tight text-slate-800 leading-none ${className}`}
        >
          MATHS
        </span>
        <span className="text-xs block font-medium text-violet-600 -mt-1 tracking-[0.1rem] uppercase">
          Mastery.
        </span>
      </div>
    </div>
  );
}
