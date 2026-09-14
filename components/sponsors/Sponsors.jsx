import Levels from "./Levels";
import PastSponsors from "./PastSponsors";
import SponsorCTA from "./SponsorCTA";
import PartnerTypes from "./Partners";

export default function Sponsors() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center md:px-10 md:pb-24 md:pt-40">
        {/* Orange glow behind heading */}
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
        <div className="relative z-10 mx-auto max-w-[950px]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Concetto 2026
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
            Our Sponsors
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#a7a7a7] md:text-base">
            Concetto is proudly supported by organisations and industry
            leaders who believe in innovation and young minds.
          </p>
        </div>
      </section>

      {/* ================= SPONSOR CTA ================= */}
      <SponsorCTA />

      {/* ================= SPONSORSHIP LEVELS ================= */}
      <Levels />

      <PartnerTypes />
      {/* ================= PAST SPONSORS ================= */}
      <PastSponsors />
    </main>
  );
}