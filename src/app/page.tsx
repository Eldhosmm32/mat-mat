"use client";

import {
  ArrowRight,
  Brain,
  ChevronRight,
  Flame,
  Gift,
  Heart,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Navbar from "../components/nav/navbar";
import { useState } from "react";
import Logo from "../components/logo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../components/ui/dialog";
import Login from "./login/login";

export default function Home() {
  const [selectedRewardCategory, setSelectedRewardCategory] = useState("all");

  const rewards = [
    {
      id: 1,
      title: "Gold Star",
      type: "digital",
      category: "badges",
      points: 100,
      icon: "🌟",
      color: "from-amber-400 to-orange-500",
      description:
        "Exclusive profile flair for mastering multi-digit operations.",
    },
    {
      id: 2,
      title: "Book Token",
      type: "physical",
      category: "vouchers",
      points: 300,
      icon: "📖",
      color: "from-red-400 to-rose-600",
      description: "Redeemable $15 voucher for any LEGO building kit.",
    },
    {
      id: 3,
      title: "Trophy Badge",
      type: "badges",
      category: "badges",
      points: 600,
      icon: "🏆",
      color: "from-indigo-400 to-blue-600",
      description: "Equip your learner space suit for high leaderboard rank.",
    },
    {
      id: 4,
      title: "Rocket Badge",
      type: "physical",
      category: "badges",
      points: 900,
      icon: "🌋",
      color: "from-emerald-400 to-teal-600",
      description:
        "Delivered straight to your doorstep with certified safety gear.",
    },
    {
      id: 5,
      title: "Mystery Gift",
      type: "physical",
      category: "gifts",
      points: 1200,
      icon: "🎁",
      color: "from-purple-400 to-indigo-600",
      description: "Valid for digital or physical comic books and novels.",
    },
    {
      id: 6,
      title: "Maths Champion Crown",
      type: "digital",
      category: "badges",
      points: 2000,
      icon: "👑",
      color: "from-sky-400 to-cyan-600",
      description: "Kids' favorite reward for completing a 30-day streak!",
    },
  ];

  const filteredRewards =
    selectedRewardCategory === "all"
      ? rewards
      : rewards.filter((r) => r.category === selectedRewardCategory);

  return (
    <>
      <Navbar />
      <section className=" overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-violet-50/70 via-white to-slate-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-center ">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center w-full">
              {/* Floating Interactive Badge 1 */}
              <div
                className="absolute top-2 left-16 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Trophy className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                    level up
                  </div>
                  <div className="text-xs font-black">Maths easier!</div>
                </div>
              </div>

              {/* Floating Interactive Badge 2 */}
              <div
                className="absolute bottom-16 right-14 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Gift className="w-5 h-5 text-pink-500" />
                <div>
                  <div className="text-xs font-bold text-slate-800">
                    Redeem rewards
                  </div>
                  <div className="text-xs font-black">With Points</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200 text-violet-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-tight">
                <Sparkles className="w-4 h-4 text-violet-600 fill-violet-600" />
                <span>The Math App Kids Play Every Day</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Transform{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Math Dread
                </span>{" "}
                Into <br className="hidden sm:inline" />
                Playful{" "}
                <span className="relative inline-block">
                  Mastery!
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q 50 12, 100 6"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <div className="flex justify-center">
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Mastery blends intuitive visual puzzle mechanics, daily
                  quests, and real rewards like{" "}
                  <strong className="text-slate-800">
                    surprise gifts, badges, and vouchers
                  </strong>{" "}
                  to build lifelong mathematical confidence for children ages 6
                  to 14.
                </p>
              </div>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => {}}
                      className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-2xl font-black text-base shadow-lg shadow-purple-300 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                    >
                      <span>Start Learning</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <Login />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                {/* <button className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-2xl font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 fill-slate-700 text-slate-700" />
                  <span>See How It Works (2 min)</span>
                </button> */}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Curriculum Aligned </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>4.9 / 5 Rating by 35,000+ Parents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-violet-500" />
                  <span>Zero Ads • 100% Kid-Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
              Engineered For Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Why Children Excel with Mastery
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              We replaced boring flashcards and repetitive worksheets with
              intuitive problem-solving visuals, high-stakes gamified
              milestones, and tangible rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Conceptual Understanding
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don't teach rote memorization. Children learn <em>why</em>{" "}
                  math formulas work using visual models, manipulatives, and
                  real-world scenarios.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-violet-600 flex items-center gap-1">
                Visual Fractions, Geometry & Algebra
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Adaptive Quests & Challenges
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The difficulty dynamically scales to each child's skill level.
                  If they stumble, gentle hints break the problem down into
                  bite-sized steps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600 flex items-center gap-1">
                Personalized Difficulty Algorithm{" "}
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Real-time Growth Analytics
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Parents & teachers get weekly progress digests. Monitor time
                  spent, accuracy across specific topics, and celebrate learning
                  milestones together.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1">
                Real-time Growth Analytics
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Gift className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Real Rewards
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Earn points for consistency and accuracy. Redeem points for
                  physical science kits, Amazon book gift cards, custom avatars,
                  and LEGO sets.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-pink-600 flex items-center gap-1">
                Redeem Anytime <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              How Mastery Works in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              A balanced loop of deep practice, tangible growth tracking, and
              real extrinsic motivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-12 h-12 rounded-xl bg-violet-600 text-white font-medium text-3xl flex items-center justify-center shadow-sm shadow-violet-200">
                  1
                </div>
                <h3 className="text-xl font-black text-slate-800 ">
                  Play, Explore & Solve
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Kids tackle visual story-driven quests matched directly to their
                grade level. Every question explains the underlying logic
                visually.
              </p>
              <div className="mt-6 bg-white p-3 rounded-xl border border-slate-150 text-xs font-bold text-slate-700 flex items-center justify-center gap-2">
                <span>🎮 Interactive Quests</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-medium text-3xl flex items-center justify-center shadow-sm shadow-amber-200">
                  2
                </div>
                <h3 className="text-xl font-black text-slate-800 ">
                  Track & Level Up
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Points are credited immediately. Parents receive weekly growth
                diagnostics detailing mastered concepts and areas to revisit.
              </p>
              <div className="mt-6 bg-white p-3 rounded-xl border border-slate-150 text-xs font-bold text-slate-700 flex items-center justify-center gap-2">
                <span>📈 Skills Heatmap</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-12 h-12 rounded-xl bg-pink-500 text-white font-medium text-3xl flex items-center justify-center shadow-sm shadow-pink-200">
                  3
                </div>
                <h3 className="text-xl font-black text-slate-800 ">
                  Redeem Rewards
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learners exchange hard-earned Mastery Points for physical kits,
                Roblox codes, bookstore vouchers, or custom profile badges!
              </p>
              <div className="mt-6 bg-white p-3 rounded-xl border border-slate-150 text-xs font-bold text-slate-700 flex items-center justify-center gap-2">
                <span>🎁 Physical Gifts</span>
                <span className="text-slate-300">•</span>
                <span>Vouchers & Badges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="rewards"
        className="py-20 bg-linear-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                Reward Vault
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                Turn Math Practice Into Real Prizes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Unlike apps that only give boring digital stars, Mastery lets
                kids convert their consistent diligence into exciting physical
                gifts & vouchers.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {["all", "vouchers", "gifts", "badges"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedRewardCategory(cat)}
                  className={`text-xs capitalize font-bold px-4 py-2 rounded-xl transition-all ${
                    selectedRewardCategory === cat
                      ? "bg-violet-600 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "All Rewards" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Reward cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRewards.map((reward) => (
              <div
                key={reward.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-3xl shadow-inner">
                      {reward.icon}
                    </div>
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 font-extrabold text-xs px-3 py-1.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      {reward.points} Points
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-800 mb-1">
                    {reward.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {reward.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                    {reward.type === "physical"
                      ? "📦 Ships to home"
                      : "⚡ Instant Unlock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-tr from-violet-700 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-amber-300 border border-white/20">
            <Sparkles className="w-4 h-4" /> Start In Less Than 60 Seconds
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Watch Your Child Fall in Love with Math?
          </h2>

          <p className="text-base sm:text-xl text-purple-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Join over 35,000+ happy learners. Start your 14-day free trial
            today. No contracts, cancel anytime with a single click.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-2xl font-bold text-base backdrop-blur-sm transition-all">
              School & Classroom Licensing
            </button>
          </div> */}

          {/* <p className="text-xs text-purple-200">
            * 14-day free trial • No credit card required for preview mode •
            COPPA & FERPA safe
          </p> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <Logo className="text-white" />
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Empowering the next generation of problem solvers through joyful
              visual mathematics, gamified consistency, and rewarding
              breakthroughs.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <span className="bg-slate-900 p-2 rounded-lg hover:text-white cursor-pointer">
                Twitter / X
              </span>
              <span className="bg-slate-900 p-2 rounded-lg hover:text-white cursor-pointer">
                Instagram
              </span>
              <span className="bg-slate-900 p-2 rounded-lg hover:text-white cursor-pointer">
                YouTube
              </span>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Curriculum
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Early Math (K - 2)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Elementary (3 - 5)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Middle School (6 - 8)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fractions Mastery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pre-Algebra Quests
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Parents & Teachers
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Parent Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Reward Vault Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Classroom Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Curriculum Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Printable Worksheets
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Safety & Company
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  COPPA Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Parent Security Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support & FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <p>© {} Mastery Learning Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for
            curious young minds everywhere.
          </p>
        </div>
      </footer>
    </>
  );
}
