"use client";

const sponsorshipLevels = [
  { number: "01", title: "Title Sponsor", amount: "₹7 lakhs", value: 7 },
  { number: "02", title: "Associate Title Sponsor", amount: "₹6 lakhs", value: 6 },
  { number: "03", title: "Platinum Sponsor", amount: "₹5 lakhs", value: 5 },
  { number: "04", title: "Gold Sponsor", amount: "₹4 lakhs", value: 4 },
  { number: "05", title: "Silver Sponsor", amount: "₹3 lakhs", value: 3 },
  { number: "06", title: "Bronze Sponsor", amount: "₹2 lakhs", value: 2 },
  { number: "07", title: "Event & Media", amount: "₹1 lakh", value: 1 },
];

export default function Levels() {
  return (
    <section className="px-5 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-[1150px]">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Partner With Us
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Sponsorship Levels
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
            Choose the partnership that best fits your brand and connect
            with the Concetto community.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden items-end justify-center gap-1 md:flex">
          {sponsorshipLevels.map((level) => (
            <div
              key={level.number}
              className="group flex max-w-[150px] flex-1 flex-col items-center"
            >
              <div
                className="relative flex w-full items-end justify-center border border-[var(--primary)]/40 bg-[var(--surface)]/70 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[var(--primary)]"
                style={{
                  height: `${210 + level.value * 25}px`,
                  clipPath:
                    "polygon(50% 0%, 100% 14%, 100% 92%, 85% 100%, 15% 100%, 0% 92%, 0% 14%)",
                }}
              >
                {/* Number */}
                <div className="absolute top-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[var(--primary)] text-sm font-semibold text-[var(--foreground)]">
                  {level.number}
                </div>

                {/* Sponsor Logo */}
                <img
                  src={`/sponsors/${level.number}.png`}
                  alt={level.title}
                  className="absolute bottom-20 left-1/2 h-20 w-20 -translate-x-1/2 object-contain"
                />

                {/* Title */}
                <p className="mb-5 w-[90%] text-center text-xs font-semibold uppercase leading-4 text-[var(--foreground)]">
                  {level.title}
                </p>
              </div>

              {/* Amount */}
              <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                {level.amount}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="space-y-3 md:hidden">
          {sponsorshipLevels.map((level) => (
            <div key={level.number} className="flex items-center gap-3">
              <span className="w-6 shrink-0 text-xs text-[var(--muted)]">
                {level.number}
              </span>

              <div className="min-w-0 flex-1">
                <div
                  className="flex h-11 min-w-fit items-center gap-3 rounded-r-lg border border-[var(--primary)]/30 bg-[var(--surface)]/70 px-3"
                  style={{
                    width: `${(level.value / 7) * 100}%`,
                  }}
                >
                  <img
                    src={`/sponsors/${level.number}.png`}
                    alt=""
                    className="h-8 w-8 shrink-0 object-contain"
                  />

                  <span className="whitespace-nowrap text-[10px] font-semibold uppercase text-[var(--foreground)]">
                    {level.title}
                  </span>
                </div>
              </div>

              <span className="w-16 shrink-0 text-right text-xs font-semibold text-[var(--primary)]">
                {level.amount}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}