"use client";

import { ArrowRight, Flame, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import Logo from "../logo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "radix-ui/dialog";
import Login from "@/src/app/login/login";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userScore, setUserScore] = useState(350);
  const [streakCount, setStreakCount] = useState(5);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        {/* <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#features"
            className="hover:text-violet-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#playground"
            className="hover:text-violet-600 transition-colors"
          >
            Try Mini-Game
          </a>
          <a
            href="#how-it-works"
            className="hover:text-violet-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#rewards"
            className="hover:text-violet-600 transition-colors flex items-center gap-1.5"
          >
            <span>Reward Vault</span>
            <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              New
            </span>
          </a>
          <a
            href="#parents"
            className="hover:text-violet-600 transition-colors"
          >
            Parents & Teachers
          </a>
          <a
            href="#testimonials"
            className="hover:text-violet-600 transition-colors"
          >
            Success Stories
          </a>
        </nav> */}

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* <div className="bg-amber-50 border border-amber-200/80 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-amber-800">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>{streakCount} Day Streak</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
            <span className="text-violet-700 font-extrabold">
              {userScore} XP
            </span>
          </div> */}

          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-md shadow-violet-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <Login />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button> */}

           <Dialog>
            <DialogTrigger asChild>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-md shadow-violet-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <Login />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          {/* <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-violet-600"
            >
              Features
            </a>
            <a
              href="#playground"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-violet-600"
            >
              Try Mini-Game
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-violet-600"
            >
              How It Works
            </a>
            <a
              href="#rewards"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-violet-600"
            >
              Reward Vault
            </a>
            <a
              href="#parents"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-violet-600"
            >
              Parents & Teachers
            </a>
          </nav> */}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            {/* <div className="flex items-center justify-between text-sm font-bold bg-amber-50 p-2.5 rounded-xl text-amber-800">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />{" "}
                Current Streak: {streakCount} Days
              </span>
              <span className="text-violet-700">{userScore} XP</span>
            </div> */}
            <button className="w-full bg-violet-600 text-white font-bold px-3 py-2 rounded-xl shadow-md">
              Start Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
