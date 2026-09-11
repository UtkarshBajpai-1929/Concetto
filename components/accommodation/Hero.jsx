import { Home } from "lucide-react";

export default function Hero() {
  return (
  <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black px-6 pt-24">

  {/* Orange glow behind heading */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] md:h-[520px] md:w-[520px] md:bg-[var(--primary)]/[0.08] md:blur-[130px]" />

  {/* Left HUD circle */}
  <div className="pointer-events-none absolute left-[7%] top-[16%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
    <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />
    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[32deg] bg-[var(--primary)]/30" />
  </div>

  {/* Right HUD circle */}
  <div className="pointer-events-none absolute right-[7%] top-[16%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
    <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />
    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-[32deg] bg-[var(--primary)]/30" />
  </div>

  {/* Horizontal lines */}
  <div className="pointer-events-none absolute left-0 top-[54%] hidden h-px w-[28%] bg-[var(--primary)]/30 md:block" />
  <div className="pointer-events-none absolute right-0 top-[54%] hidden h-px w-[28%] bg-[var(--primary)]/30 md:block" />

  {/* Hero content */}
  <div className="relative z-10 mx-auto max-w-[950px] text-center">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
      Concetto 2026
    </p>

    <h1 className="text-3xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-5xl">
      Accommodation
    </h1>

    <div className="mx-auto mt-6 h-px w-36 bg-[var(--primary)]" />

    <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#a7a7a7] md:text-base">
      Stay on campus and experience Concetto 2026 at IIT (ISM)
      Dhanbad with convenient accommodation facilities for
      visiting participants.
    </p>
  </div>
</section>
  );
}