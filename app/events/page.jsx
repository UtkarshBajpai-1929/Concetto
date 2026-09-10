"use client";

import { useMemo, useState } from "react";
import EventFilter from "@/components/events/EventFilter";
import EventGrid from "@/components/events/EventGrid";
import { events } from "@/data/events";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents = useMemo(() => {
    const query = search.toLowerCase().trim();

    return events.filter((event) => {
      const matchesCategory =
        activeCategory === "All" ||
        event.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center md:px-10 md:pb-20 md:pt-40">
        {/* Orange glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] md:h-[520px] md:w-[520px] md:bg-[var(--primary)]/[0.08] md:blur-[130px]" />

        {/* Left HUD circle */}
        <div className="pointer-events-none absolute left-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Right HUD circle */}
        <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Horizontal lines */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Concetto 2026
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
            Explore
            <span className="text-[var(--primary)]"> Events.</span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#a7a7a7] md:text-base">
            Discover competitions, challenges and experiences at Concetto
            2026.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          {/* Search + Filters */}
          <EventFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            search={search}
            setSearch={setSearch}
          />

          {/* Event Grid */}
          {filteredEvents.length > 0 ? (
            <EventGrid events={filteredEvents} />
          ) : (
            <div className="flex min-h-55 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <p className="text-sm text-[var(--muted)]">
                No events found.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}