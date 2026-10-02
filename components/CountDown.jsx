"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-10-09T00:00:00+05:30").getTime();

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setIsLive(true);
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setIsLive(false);

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-4 py-6 md:px-8 md:py-8">
      <div className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-4 shadow-[0_0_40px_rgba(232,80,2,0.08)] backdrop-blur-sm md:px-8 md:py-5">

        {/* Event Info */}
        <div className="hidden shrink-0 md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Concetto 2026
          </p>

          <p className="mt-1 text-xs tracking-wide text-[var(--muted)]">
            09 October 2026
          </p>
        </div>

        {/* Countdown / Live Status */}
        {isLive ? (
          <div className="flex w-full items-center justify-center md:w-auto">
            <div className="flex items-center gap-3 px-6 py-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#22C55E]" />
              </span>

              <span className="text-xl font-bold uppercase tracking-[0.2em] text-[#22C55E] sm:text-2xl md:text-3xl">
                Event Is Live
              </span>
            </div>
          </div>
        ) : (
          <div className="grid w-full grid-cols-4 md:w-auto">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-center px-2 sm:px-4 md:px-8 ${
                  index !== 0
                    ? "border-l border-[var(--border)]"
                    : ""
                }`}
              >
                <div className="flex items-baseline gap-1.5 md:gap-2">
                  <span className="text-xl font-bold tabular-nums tracking-tight text-[var(--foreground)] sm:text-2xl md:text-4xl">
                    {String(item.value).padStart(2, "0")}
                  </span>

                  <span className="text-[7px] font-medium uppercase tracking-wider text-[var(--muted)] sm:text-[8px] md:text-[10px]">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}