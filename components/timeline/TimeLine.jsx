"use client";

import { useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import TimelineItem from "./TimelineItem";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  const [activeDay, setActiveDay] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const currentDay = timelineData[activeDay];

  const visibleEvents = showAll
    ? currentDay.events
    : currentDay.events.slice(0, 3);

  const handleDayChange = (index) => {
    setActiveDay(index);
    setShowAll(false);
  };

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[var(--background)] px-5 md:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Fest Timeline
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-4xl">
            Timeline
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-muted)]">
            Explore everything happening at Concetto 2026.
          </p>
        </div>

        <div className="mb-12 flex justify-start gap-2 overflow-x-auto px-3 pb-2 md:justify-center md:px-0">
          {timelineData.map((day, index) => (
            <button
              key={day.date}
              onClick={() => handleDayChange(index)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeDay === index
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(232,80,2,0.2)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {day.date}
            </button>
          ))}
        </div>

        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            {currentDay.date}
          </p>
        </div>

        <div className="relative mx-auto max-w-[850px]">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--primary)]/50 to-transparent md:block" />

          <div className="space-y-5">
            {visibleEvents.map((event, index) => (
              <div
                key={`${event.title}-${index}`}
                className="relative"
              >
                <div className="absolute left-1/2 top-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)] md:block" />

                <TimelineItem
                  event={event}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            ))}
          </div>
        </div>

        {currentDay.events.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 rounded-lg border border-[var(--primary)]/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
            >
              {showAll ? "Show Less" : "View Full Schedule"}

              {showAll ? (
                <ArrowDown
                  size={15}
                  className="rotate-180 transition-transform"
                />
              ) : (
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}