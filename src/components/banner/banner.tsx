import { Sparkles } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-linear-to-r from-violet-600 via-indigo-600 to-purple-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
      <Sparkles
        className="w-4 h-4 animate-spin text-yellow-300"
        style={{ animationDuration: "6s" }}
      />
      <span>
        Start Learning <strong>Today</strong>
      </span>
       <span className="hidden md:inline-block bg-white/20 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
        Zero Ads • 100% Kid-Safe
      </span>
      {/* <span>
        Spring Learning Quest is LIVE! Kids earn{" "}
        <strong>2x Mastery Points</strong> this week.
      </span>
      <span className="hidden md:inline-block bg-white/20 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
        Limited Time
      </span> */}
    </div>
  );
}
