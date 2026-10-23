"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import OpenHouseFlyer from "@/public/events/open-house-truck-or-treat-2026.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Explicit Eastern Daylight Time offsets keep the schedule in Virginia time,
// regardless of the visitor's time zone or when the static site was built.
const STARTS_AT = Date.parse("2026-10-23T00:00:00-04:00");
const ENDS_AT = Date.parse("2026-10-25T00:00:00-04:00");
const SEEN_KEY = "reva-open-house-2026-seen";

export default function OpenHousePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now < STARTS_AT || now >= ENDS_AT) return;

    try {
      if (!sessionStorage.getItem(SEEN_KEY)) {
        setOpen(true);
        sessionStorage.setItem(SEEN_KEY, "1");
      }
    } catch {
      // Visitors who block browser storage can still see and dismiss the flyer.
      setOpen(true);
    }

    const timeout = window.setTimeout(() => setOpen(false), ENDS_AT - now);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-5xl gap-0 overflow-hidden rounded-2xl border-white/20 bg-slate-950 p-0 text-white shadow-2xl [&>button]:rounded-full [&>button]:bg-white/10 [&>button]:p-2 [&>button]:opacity-100 [&>button]:hover:bg-white/20 [&>button]:focus:ring-orange-400">
        <DialogHeader className="space-y-1 px-5 py-4 pr-16 text-left">
          <DialogTitle className="text-lg font-bold leading-snug text-orange-300 sm:text-xl">
            Open House &amp; Truck or Treat
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-200">
            Saturday, October 24 · 9 AM–1 PM
            <span className="sr-only">
              . Explore fire and rescue vehicles, collect candy, and meet local
              heroes and community organizations. Fun for the whole family.
            </span>
          </DialogDescription>
        </DialogHeader>

        <Image
          src={OpenHouseFlyer}
          alt="Reva Volunteer Fire & Rescue Open House and Truck or Treat flyer, featuring emergency vehicles, a bounce house, and Halloween candy."
          className="block h-auto max-h-[calc(100dvh-14rem)] w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={open}
        />

        <div className="flex flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row">
          <p className="text-center text-sm text-slate-200 sm:text-left">
            18230 Birmingham Road · Culpeper, VA
          </p>
          <DialogClose asChild>
            <button
              type="button"
              className="w-full shrink-0 rounded-lg bg-orange-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Continue to website
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
